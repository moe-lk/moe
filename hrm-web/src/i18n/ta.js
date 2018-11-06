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
        configuration:'கட்டமைப்பு',
        theme:{
            name:'பெயர்',
            light:'ஒளி',
            dark:'டார்க்'
        },
        language:'மொழி'
    },
    ...mergeTranslations(englishMessages, ),
    resources: {
        employees: {
            name: 'ஊழியர் |||| ஊழியர்'
        },
        placement:{
            name:'வேலைவாய்ப்பு'
        },
        templates:{
            name:'டெம்ப்ளேட்கள்'
        },
        transfer:{
            name:'மாற்றம்'
        },
        attachment:{
            name:'இணைப்பு'
        },
        new_employee:{
            name:'புதிய அதிகாரி சேர்க்கவும்'
        },
        secondment:{
            name:'இரண்டாவது கருத்து'
        },
        promotion:{
            name:'பதவி உயர்வு'
        },
        promotion_transfer:{
            name:'ஊக்குவிப்பு மாற்றம்'
        },
        salary_revision:{
            name:'சம்பள மறுபார்வை'
        },
        increment:{
            name:'சம்பள உயர்வு'
        },
        discipilinary:{
            name:'ஒழுக்காற்று நடவடிக்கைகள்'
        },
        verify:{
            name:'கடிதம் சரிபார்க்கவும்'
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
