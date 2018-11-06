import englishMessages from 'ra-language-english';
// import treeEnglishMessages from 'ra-tree-language-english';
import { mergeTranslations } from 'react-admin';

export const messages = {
    simple: {
        action: {
            close: 'Close',
            resetViews: 'Reset views',
        },
        'create-post': 'New post',
    },
    pos:{
        configuration:'Configuration',
        theme:{
            name:'Name',
            light:'Light',
            dark:'Dark'
        },
        language:'Language'
    },
    ...mergeTranslations(englishMessages, ),
    resources: {
        employees: {
            name: 'Employees |||| Employee'
        },
        placement:{
            name:'Placement'
        },
        templates:{
            name:'Templates'
        },
        transfer:{
            name:'Transfer'
        },
        attachment:{
            name:'Attachment'
        },
        new_employee:{
            name:'Add New Officer'
        },
        secondment:{
            name:'Secondment'
        },
        promotion:{
            name:'Promotion'
        },
        promotion_transfer:{
            name:'Promotion Transfer'
        },
        salary_revision:{
            name:'Salary Revision'
        },
        increment:{
            name:'Increment'
        },
        discipilinary:{
            name:'Disciplinary Actions'
        },
        verify:{
            name:'Verify Letter'
        },
        comments: {
            name: 'Comment |||| Comments',
            fields: {
                body: 'Body',
                created_at: 'Created at',
                post_id: 'Posts',
                author: {
                    name: 'Author',
                },
            },
        },
        user: {
            name: 'User |||| Users',
            fields: {
                name: 'Name',
                role: 'Role',
            },
            action:{
                save_and_show:'Save and Show',
                save_and_add:'Save and Add',
            }
        },
    }
};

export default messages;
