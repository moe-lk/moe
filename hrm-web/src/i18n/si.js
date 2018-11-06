import englishMessages from 'ra-language-english';
// import treeEnglishMessages from 'ra-tree-language-english';
import { mergeTranslations } from 'react-admin';

export const messages = {
    simple: {
        action: {
            close: 'වසන්න',
            resetViews: 'නැවත සකස් කරන්න',
            save_and_view:'සුරකින්න සහ දර්ශනය කරන්න',
            save_and_add:'සුරකින්න සහ එකතු කරන්න'
        },
    },
    pos:{
        configuration:'වින්යාසය',
        theme:{
            name:'නාමය',
            light:'ආලෝකය',
            dark:'අඳුරු වේ'
        },
        language:'භාෂාව'
    },
   
    ...mergeTranslations(englishMessages, ),
    resources: {
        pos:{
            configuration:'වින්යාසය',
            theme:{
                name:'නාමය',
                light:'ආලෝකය',
                dark:'අඳුරු වේ'
            },
            language:'භාෂාව'
        },
        employees: {
            name: 'සේවක |||| සේවකයා'
        },
        placement:{
            name:'ස්ථානගත කිරීම'
        },
        templates:{
            name:'ආකෘති'
        },
        transfer:{
            name:'මාරු'
        },
        attachment:{
            name:'ඇමුණුම්'
        },
        new_employee:{
            name:'නව සේවක එකතු කරන්න'
        },
        secondment:{
            name:'ද්විතියිකයි'
        },
        promotion:{
            name:'ප්රවර්ධන'
        },
        promotion_transfer:{
            name:'ස්ථාන මාරු කිරීම'
        },
        salary_revision:{
            name:'වැටුප් සංශෝධනය'
        },
        increment:{
            name:'වැඩිවීම'
        },
        discipilinary:{
            name:'විනය ක්රියාමාර්ග'
        },
        verify:{
            name:'ලිපිය තහවුරු'
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
