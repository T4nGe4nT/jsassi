let appData = {
    name: 'Snail Mail',
    mailboxes: [
        'inbox',
        'junk',
        'sent',
        'draft',
    ],
    contacts: [
        {name: 'Emily' , email: "esnail@smail.com"},
        {name: 'Lee' , email: "plee@smail.com"}
    ],
    inbox: [
        {from: "esnail@smail.com", to: "you@smail.com", message: "Hey did you get my last message?"},
        {from: "junkman@badplace.com", to: "you@smail.com", message: "Click this link to win big..."},
        {from: "stiegleredtech@steigleredtech.com", to: "you@smail.com", message: "Welcome to Cohort 6!"},
    ],
    junk: [
        {from: "scaryperson@whoknows.com", to: "you@smail.com", message: "Would you like a free..."},
        {from: "junkman34@badplace.com", to: "you@smail.com", message: "Click this link to win big..."},
        {from: "hackerguy@meanstreet.com", to: "you@smail.com", message: "You have won $500 click ..."},

    ],
    sent:[],
    draft:[], 
}

// Step 5

console.log(appData.mailboxes);

console.log(appData.inbox);

if (appData.inbox.length > 1) {
    console.log(appData.inbox[1].message);
} else {
    console.log('You have no such message');
}

if (appData.inbox.length > 0) {
    let emailToSend = appData.inbox.shift();
    appData.sent.push(emailToSend); 
    console.log('Email marked as sent:', emailToSend);
} else {
    console.log('No emails to send in the inbox');
}

let draftEmail = {
    from: 'you@smail.com',
    to: 'friend@smail.com',
    message: 'This is a draft email.'
};

appData.draft.push(draftEmail);
console.log('Draft email added:', draftEmail);