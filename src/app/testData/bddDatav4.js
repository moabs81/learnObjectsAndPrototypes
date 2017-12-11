'use strict';
exports.bddData = function() {
    const testData = [{
        user: [{
                name: 'Customer',
                scenarios: [{
                    name: 'Review Process',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The customer has the name of the server and the location',
                            When: 'The customer enters the name of the server',
                            Then: 'The system uses auto-complete to vlaidate the server and location'
                        }, {
                            Given: 'The location and server information is correct',
                            When: 'The customer verifies the location and server information',
                            Then: 'The system presents the customer with a review form to fill out'
                        }, {
                            Given: 'The form is validly filled out',
                            When: 'The customer submits the review form',
                            Then: 'The system thanks the customer for participating'
                        }]
                    }, {
                        name: 'Negative',
                        steps: [{
                            Given: 'The location or server information is incorrect',
                            When: 'The customer enters corrected information',
                            Then: 'The system presents the customer with a review form to fill out'
                        }, {
                            Given: 'The review form is invalid',
                            When: 'The customer corrects the form to be valid',
                            Then: 'The system validates the form in a visual way so that the customer can submit the form'
                        }]
                    }]
                }, {
                    name: 'Sign Up',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The customer is new to the app',
                            When: 'The customer enters a valid e-mail address and password',
                            Then: 'The system e-mails the server a verification URL'
                        }, {
                            Given: 'The customer has received the e-mail',
                            When: 'The customer navigates to the URL',
                            Then: 'The customer presents the server (1) a confirmation screen'
                        }]
                    }, {
                        name: 'Negative',
                        steps: [{
                            Given: 'The sign up form is invalid',
                            When: 'The customer corrects the form information to be valid',
                            Then: 'The system validates the form in a visual way so that the customer can submit the form'
                        }, {
                            Given: 'The customer is not new to the app',
                            When: 'The customer enters a valid e-mail address and password',
                            Then: 'The system presents the customer (1) a reminder that an account already exists and (2) a login path'
                        }, {
                            Given: 'The customer has not received an e-mail',
                            When: 'The customer requests the e-mail again',
                            Then: 'The customer e-mails the server with a verification URL'
                        }, {
                            Given: 'The customer has not confirmed his or her e-mail',
                            When: 'The customer waits more than 30 minutes to confirm his or her sign up',
                            Then: 'The system presents the customer (1) a message that the process will need to be restarted and (2) a sign-up path'
                        }]
                    }]
                }, , {
                    name: 'Change Password',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The customer has an active account',
                            When: 'The customer enters a new valid password',
                            Then: 'The system presents the customer a confirmation of the change'
                        }]
                    }, {
                        name: 'Negative',
                        steps: [{
                            Given: 'The change password form is invalid',
                            When: 'The customer corrects the form information to be valid',
                            Then: 'The system validates the form in a visual way so that the customer can submit the form'
                        }]
                    }]
                }, {
                    name: 'Deactive Account',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The customer wishes to deactivate his or her account',
                            When: 'The customer selects to deactivate his or her account',
                            Then: 'The customer presents ther server with a message asking for confirmation of the deactivation'
                        }, {
                            Given: 'The customer means to deactivate his or her account',
                            When: 'The customer confirms the account deactivation',
                            Then: 'The customer presents the server with confirmation that the account has been deactivated'
                        }]
                    }]
                }, {
                    name: 'View Report',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The customer has submitted at least one review',
                            When: 'The customer selects to view his or her submitted reviews report',
                            Then: 'The system presents the customer with a report of the most recent 10 reviews'
                        }, {
                            Given: 'The customer wishes to sort the report by date',
                            When: 'The customer clicks to sort the report by date',
                            Then: 'The customer sorts the report by date ascending or descending'
                        }, {
                            Given: 'The customer wishes to sort the report alphabetically by location',
                            When: 'The server clicks to sort the report location',
                            Then: 'The system sorts the report alphabetically by location ascending or descending'
                        }, {
                            Given: 'The customer wishes to see more reviews',
                            When: 'The customer scrolls to the end of the first 10 reviews',
                            Then: 'The system presents the customer with the next 10 most recent reviews'
                        }, {
                            Given: 'The customer wishes to see more reviews',
                            When: 'The customer clicks to show more reviews',
                            Then: 'The system presents the customer with the next 10 most recent reviews'
                        }]
                    }, {
                        name: 'Negative',
                        steps: [{
                            Given: 'The customer has not submitted at least one review',
                            When: 'The customer selects to view his or her submitted review report',
                            Then: 'The system presents the customer with notification that there are no reviews to view'
                        }]
                    }]
                }]
            },
            {
                name: 'Server',
                scenarios: [{
                    name: 'Sign Up',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The server is new to the app',
                            When: 'The server enters a valid first name, last name, e-mail address, and password',
                            Then: 'The system e-mails the server a verification URL'
                        }, {
                            Given: 'The server has received the e-mail',
                            When: 'The server navigates to the URL',
                            Then: 'The system presents the server (1) a confirmation screen and (2) an add picture path'
                        }, {
                            Given: 'The server has a photo of him or herself',
                            When: 'The server selects the photo of him or herself',
                            Then: 'The system presents the server a confirmation of the photo upload'
                        }]
                    }, {
                        name: 'Negative',
                        steps: [{
                            Given: 'The sign up form is invalid',
                            When: 'The server corrects the form information to be valid',
                            Then: 'The system validates the form in a visual way so that the server can submit the form'
                        }, {
                            Given: 'The server is not new to the app',
                            When: 'The server enters a valid first name, last name, e-mail address, and password',
                            Then: 'The system presents the server (1) a reminder that an account already exists and (2) a login path'
                        }, {
                            Given: 'The server has not received an e-mail',
                            When: 'The server requests the e-mail again',
                            Then: 'The system e-mails the server with a verification URL'
                        }, {
                            Given: 'The server has not confirmed his or her e-mail',
                            When: 'The server waits more than 30 minutes to confirm his or her sign up',
                            Then: 'The system presents the server (1) a message that the process will need to be restarted and (2) a sign-up path'
                        }, {
                            Given: 'The server does not have a picture of him or herself',
                            When: 'The server does select a photo of him or herself',
                            Then: 'The system presents the server a confirmation of the step skipped'
                        }]
                    }]
                }, {
                    name: 'Sign In',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The server has a valid login',
                            When: 'The server enters his or her e-mail and password',
                            Then: 'The system presents the server the default view'
                        }]
                    }, {
                        name: 'Negative',
                        steps: [{
                            Given: 'The server does not have a valid login',
                            When: 'The server enters his or her e-mail and password',
                            Then: 'The system presents the server (1) a reminder that no such account exists and (2) a sign-up path'
                        }, {
                            Given: 'The server\'s e-mail or password are incorrect',
                            When: 'The server enters the incorrect username and/or password',
                            Then: 'The system presents the server (1) a message that one of the two fields is incorrect and (2) a reset password path'
                        }, {
                            Given: 'The server has opted to reset his or her password',
                            When: 'The server enters his or her correct e-mail address',
                            Then: 'The system e-mails the user a URL to reset his or her password'
                        }, {
                            Given: 'The server has received the e-mail',
                            When: 'The server navigates to the URL',
                            Then: 'The system presents the user the reset password form'
                        }, {
                            Given: 'The server has entered a valid password',
                            When: 'The server submits the reset password form',
                            Then: 'The system presents the user (1) a confirmation screen and (2) a home screen path'
                        }]
                    }]
                }, {
                    name: 'Location Association',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The server is employed by a participating location',
                            When: 'The server selects the subject location',
                            Then: 'The system presents the user a confirmation message'
                        }]
                    }]
                }, {
                    name: 'Change Location',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The server is employed at a new location',
                            When: 'The server selects the subject location',
                            Then: 'The system presents the user a confirmation of location association'
                        }, {
                            Given: 'The server has multiple locations on file',
                            When: 'The server selects an old location',
                            Then: 'The system presents the server (1) the location information and (2) a delete path'
                        }, {
                            Given: 'The server is no longer employed at an old location',
                            When: 'The server deletes the old location',
                            Then: 'The system presents the user confirmation of deletion of the old location'
                        }]
                    }]
                }, {
                    name: 'Change Password',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The server has an active account',
                            When: 'The server enters a new valid password',
                            Then: 'The system presents the server a confirmation of the change'
                        }]
                    }, {
                        name: 'Negative',
                        steps: [{
                            Given: 'The change password form is invalid',
                            When: 'The server corrects the form information to be valid',
                            Then: 'The system validates the form in a visual way so that the server can submit the form'
                        }]
                    }]
                }, {
                    name: 'Deactivate Account',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The server wishes to deactivate his or her account',
                            When: 'The server selects to deactivate his or her account',
                            Then: 'The system presents ther server with a message asking for confirmation of the deactivation'
                        }, {
                            Given: 'The server means to deactivate his or her account',
                            When: 'The server confirms the account deactivation',
                            Then: 'The system presents the server with confirmation that the account has been deactivated'
                        }]
                    }]
                }, {
                    name: 'View Report',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The server has been reviewed at least one time',
                            When: 'The server selects to view his or her review report',
                            Then: 'The system presents the server with a report of the most recent 10 reviews'
                        }, {
                            Given: 'The server wishes to sort the report by date',
                            When: 'The server clicks to sort the report by date',
                            Then: 'The system sorts the report by date ascending or descending'
                        }, {
                            Given: 'The server wishes to sort the report alphabetically by location',
                            When: 'The server clicks to sort the report location',
                            Then: 'The system sorts the report alphabetically by location ascending or descending'
                        }, {
                            Given: 'The server wishes to see more reviews',
                            When: 'The server scrolls to the end of the first 10 reviews',
                            Then: 'The system presents the server with the next 10 most recent reviews'
                        }, {
                            Given: 'The server wishes to see more reviews',
                            When: 'The server selects to show more reviews',
                            Then: 'The system presents the server with the next 10 most recent reviews'
                        }]
                    }, {
                        name: 'Negative',
                        steps: [{
                            Given: 'The server has not been reviewed at least one time',
                            When: 'The server selects to view his or her review report',
                            Then: 'The system presents the server with notification that there are no reviews to view'
                        }]
                    }]
                }, {
                    name: 'Send Copy of Report To E-mail',
                    paths: [{
                        name: 'Postive',
                        steps: [{
                            Given: 'The server wishes to send a full copy of the report to his or her e-mail',
                            When: 'The server selects to send the report e-mail',
                            Then: 'The system sends a copy of the report to the server\'s e-mail of record'
                        }]
                    }]
                }]
            }
        ]
    }];
    return testData;
}