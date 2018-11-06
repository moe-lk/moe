import React, { Component, Fragment } from 'react';
import { GET_LIST, GET_MANY, Responsive, Title } from 'react-admin';

import dataProvider from '../dataProvider';
import NewEmployees from './NewEmployees';
import Welcome from './Welcome';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' },
};

class Dashboard extends Component {
    state = {};

    componentDidMount() {
        const aMonthAgo = new Date();
        aMonthAgo.setDate(aMonthAgo.getDate() - 30);

                dataProvider(GET_LIST, 'commands', {
                    filter: { date_gte: aMonthAgo.toISOString() },
                    sort: { field: 'date', order: 'DESC' },
                    pagination: { page: 1, perPage: 50 },
                })
                    .then(response =>
                        response.data
                            .filter(order => order.status !== 'cancelled')
                            .reduce(
                                (stats, order) => {
                                    if (order.status !== 'cancelled') {
                                        stats.revenue += order.total;
                                        stats.nbNewOrders++;
                                    }
                                    if (order.status === 'ordered') {
                                        stats.pendingOrders.push(order);
                                    }
                                    return stats;
                                },
                                {
                                    revenue: 0,
                                    nbNewOrders: 0,
                                    pendingOrders: [],
                                }
                            )
                    )
                    .then(({ revenue, nbNewOrders, pendingOrders }) => {
                        this.setState({
                            revenue: revenue.toLocaleString(undefined, {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            }),
                            nbNewOrders,
                            pendingOrders,
                        });
                        return pendingOrders;
                    })
                    .then(pendingOrders =>
                        pendingOrders.map(order => order.customer_id)
                    )
                    .then(customerIds =>
                        dataProvider(GET_MANY, 'customers', {
                            ids: customerIds,
                        })
                    )
                    .then(response => response.data)
                    .then(customers =>
                        customers.reduce((prev, customer) => {
                            prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                            return prev;
                        }, {})
                    )
                    .then(customers =>
                        this.setState({ pendingOrdersCustomers: customers })
                    );

                dataProvider(GET_LIST, 'reviews', {
                    filter: { status: 'pending' },
                    sort: { field: 'date', order: 'DESC' },
                    pagination: { page: 1, perPage: 100 },
                })
                    .then(response => response.data)
                    .then(reviews => {
                        const nbPendingReviews = reviews.reduce(nb => ++nb, 0);
                        const pendingReviews = reviews.slice(
                            0,
                            Math.min(10, reviews.length)
                        );
                        this.setState({ pendingReviews, nbPendingReviews });
                        return pendingReviews;
                    })
                    .then(reviews => reviews.map(review => review.customer_id))
                    .then(customerIds =>
                        dataProvider(GET_MANY, 'customers', {
                            ids: customerIds,
                        })
                    )
                    .then(response => response.data)
                    .then(customers =>
                        customers.reduce((prev, customer) => {
                            prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                            return prev;
                        }, {})
                    )
                    .then(customers =>
                        this.setState({ pendingReviewsCustomers: customers })
                    );

                dataProvider(GET_LIST, 'employees', {
                    filter: {
                        approved: 0
                    },
                    sort: { field: 'f_name', order: 'DESC' },
                    pagination: { page: 1, perPage: 50 },
                })
                    .then(response => response.data)
                    .then(newEmployees => {
                        this.setState({ newEmployees });
                        this.setState({
                            nbNewEmployees: newEmployees.reduce(nb => ++nb, 0),
                        });
                    });
            }
        
    

    render() {
        const {
            nbNewEmployees,
            newEmployees
        } = this.state;
        return (
            <Fragment>
                <Title title="Posters Galore Admin" />
                <Responsive
                    xsmall={
                        <div>
                            <div style={styles.flexColumn}>
                                <div style={{ marginBottom: '2em' }}>
                                    <Welcome />
                                </div>
                            </div>
                        </div>
                    }
                    small={
                        <div style={styles.flexColumn}>
                            <div style={styles.singleCol}>
                                <Welcome />
                            </div>
                        </div>
                    }
                    medium={
                        <div style={styles.flex}>
                            <div style={styles.leftCol}>
                                <div style={styles.flex}>
                                
                                </div>
                                <div style={styles.singleCol}>
                                    <Welcome />
                                </div>
                                <div style={styles.singleCol}>
                                    
                                </div>
                            </div>
                            <div style={styles.rightCol}>
                                <div style={styles.flex}>
                                <NewEmployees
                                        nb={nbNewEmployees}
                                        visitors={newEmployees}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />
            </Fragment>
        );
    }
}

export default Dashboard;