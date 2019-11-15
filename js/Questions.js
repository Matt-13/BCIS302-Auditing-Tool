class Questions {
    myQuestions = [
        {
            question: "How often are you updating software?",
            answers: {
                a: {questionName: "Less than once per year", score: 0},
                b: {questionName: "Once a month", score: 1},
                c: {questionName: "Once per fortnight", score: 2},
                d: {questionName: "Once per week", score: 3},
                e: {questionName: "Once per day", score: 4},
                f: {questionName: "As soon as an update is available", score: 5},
                g: {questionName: "Unknown (gives a 0 score)", score: 0}
            },
            correctAnswer: "f"
        },
        {
            question: "What type of threat logging does the company use?",
            answers: {
                a: {questionName:"None", score: 0},
                b: {questionName: "SIEM (Splunk/Arcsight/ELSA/etc)", score: 5},
                c: {questionName: "OS Event Logging", score: 1}
            },
            correctAnswer: "b"
        },
        {
            question: "How are threat logs handled?",
            answers: {
                a: {questionName: "Not handled (gives a 0 score)", score: 0},
                b: {questionName: "Handled when there is a threat", score: 2.5},
                c: {questionName: "Handled by threat analysts", score: 5},
                d: {questionName: "Ignored (gives a -10 score)", score: -10}
            },
            correctAnswer: "c"
        },
        {
            question: "How old is your software?",
            answers: {
                a: {questionName:"None", score: 0},
                b: {questionName: "SIEM (Splunk/Arcsight/ELSA/etc)", score: 5},
                c: {questionName: "OS Event Logging", score: 1}
            },
            correctAnswer: "b"
        },
        {
            question: "How often is hardware changed and updated?",
            answers: {
                a: {questionName:"None", score: 0},
                b: {questionName: "SIEM (Splunk/Arcsight/ELSA/etc)", score: 5},
                c: {questionName: "OS Event Logging", score: 1}
            },
            correctAnswer: "b"
        },
        {
            question: "How old is your hardware?",
            answers: {
                a: {questionName:"None", score: 0},
                b: {questionName: "SIEM (Splunk/Arcsight/ELSA/etc)", score: 5},
                c: {questionName: "OS Event Logging", score: 1}
            },
            correctAnswer: "b"
        },
        {
            question: "Is hardware and systems able to be physically accessed?",
            answers: {
                a: {questionName:"None", score: 0},
                b: {questionName: "SIEM (Splunk/Arcsight/ELSA/etc)", score: 5},
                c: {questionName: "OS Event Logging", score: 1}
            },
            correctAnswer: "b"
        },
        {
            question: "If hardware is able to be physically accessed, are you able to keep it from being so?",
            answers: {
                a: {questionName:"None", score: 0},
                b: {questionName: "SIEM (Splunk/Arcsight/ELSA/etc)", score: 5},
                c: {questionName: "OS Event Logging", score: 1}
            },
            correctAnswer: "b"
        },
        {
            question: "Are there any critical systems that are able to be accessed remotely?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "If so, is there a valid reason for them being accessed remotely",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Does your company know about the various ways hackers can access your systems?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "What is being done to protect against hackers?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "How often are passwords changed, is there a schedule?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "When logging into your system, is there some type of authentication process to prove it is you?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "When logged into your system, are you allowed to access data others cannot? (or vice versa)",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "When logged into your system, actions you take, are they logged somewhere?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Are critical systems able to be isolated from the internet?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Are your employees educated about the potential threats out there?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Are your employees tech literate?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Are ex-employees able to access systems still?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Do employees have a clause in their contracts stating they are not allowed into systems after leaving?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Has your network had unused and unneeded ports closed?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Are emails filtered, blocked, and checked?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Is there some type of antivirus software installed on all systems?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Is there some type of antimalware software installed on all systems?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Is there an active firewall in place?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Is there frequent malware and antiviral scanning on all networked systems?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Are unfamiliar domains blocked from access?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Are all downloaded files scanned and sandboxed?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
        {
            question: "Is there some kind of cybersecurity policy in place?",
            answers: {
                a: {questionName:" ", score: 0},
                b: {questionName: " ", score: 5},
                c: {questionName: " ", score: 1}
            },
            correctAnswer: "a"
        },
    ];
}