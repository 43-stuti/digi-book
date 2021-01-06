let chats = {
    Intro: {
        1001: {
            type:'System',
            text : 'Hey! I am StAn. \n Would you like to meet the amazing residents',
            chatButtonOptions: [2001,2002]
        }, 
        2001: {
            type:'User',
            text : 'Yes! Take me to them',
            nextChat: [1002,1003]
        },
        2002: { 
            type:'User',
            text : "I'll see them later"
        },
        1002: {
            type:'System',
            text : 'Simply click on the house you would like to visit.',
            chatButtonOptions: [2001,2002]
        }, 
        1003: {
            type:'System',
            text : 'And voila! you shall be ported there !',
            chatButtonOptions: [2001,2002]
        }
    },
    house1: {
        1001: {
            type:'System',
            text : 'Tujhe dekha Maine',
            chatButtonOptions: [2001,2002]
        }, 
        2002: {
            type:'User',
            text : 'Haiyaah',
            nextChat: [1002]
        },
        1002: {
            type:'System',
            text : 'Chali chali fir!',
            nextChat: [1002,1003]
        }
    },
    house2: {
        1001: {
            type:'System',
            text : 'Tujhe dekha Maine',
            chatButtonOptions: [2001,2002]
        }, 
        2002: {
            type:'User',
            text : 'Haiyaah',
            nextChat: [1002]
        },
        1002: {
            type:'System',
            text : 'Chali chali fir!',
            nextChat: [1002,1003]
        }
    },
    house3: {
        1001: {
            type:'System',
            text : 'Tujhe dekha Maine',
            chatButtonOptions: [2001,2002]
        }, 
        2002: {
            type:'User',
            text : 'Haiyaah',
            nextChat: [1002]
        },
        1002: {
            type:'System',
            text : 'Chali chali fir!',
            nextChat: [1002,1003]
        }
    },
    house4: {
        1001: {
            type:'System',
            text : 'Tujhe dekha Maine',
            chatButtonOptions: [2001,2002]
        }, 
        2002: {
            type:'User',
            text : 'Haiyaah',
            nextChat: [1002]
        },
        1002: {
            type:'System',
            text : 'Chali chali fir!',
            nextChat: [1002,1003]
        }
    },
    house5: {
        1001: {
            type:'System',
            text : 'Tujhe dekha Maine',
            chatButtonOptions: [2001,2002]
        }, 
        2002: {
            type:'User',
            text : 'Haiyaah',
            nextChat: [1002]
        },
        1002: {
            type:'System',
            text : 'Chali chali fir!',
            nextChat: [1002,1003]
        }
    },
    house6: {
        1001: {
            type:'System',
            text : 'Tujhe dekha Maine',
            chatButtonOptions: [2001,2002]
        }, 
        2002: {
            type:'User',
            text : 'Haiyaah',
            nextChat: [1002]
        },
        1002: {
            type:'System',
            text : 'Chali chali fir!',
            nextChat: [1002,1003]
        }
    }
}

export default chats;