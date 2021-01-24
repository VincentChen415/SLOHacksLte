// {
//     id: '',
//     name: '',
//     link: '',
//     description: '',
//     tags: [],
// },

import { findAllByPlaceholderText } from "@testing-library/react";

export const tools = [
    {
        id: '',
        name: '',
        link: '',
        description: '',
        tags: [],
    },
    {
        id: '0',
        name: 'Zoom',
        link: 'https://www.zoom.us',
        description: 'Free video conferencing tools for K-12.',
        tags: ['Communications'],
    },
    {
        id: '1',
        name: 'RingCentral',
        link: 'https://www.ringcentral.com/covid19',
        description: `Free video conferencing for educators (K-12 schools),
                    health-care provider, or non-profit.`,
        tags: ['Communications'],
    },
    {
        id: '2',
        name: 'Google',
        link: 'https://cloud.google.com/blog/products/g-suite/helping-businesses-and-schools-stay-connected-in-response-to-coronavirus',
        description: `Free, premium version of its workplace video chat
                    tool until July, to help businesses and schools working remotely
                    due to coronavirus. Those features include having up to 250 participants
                    per call, live streaming for up to 100,000 viewers within a domain, and
                    the ability to record meetings and save them to Google Drive.`,
        tags: ['Communications'],
    },
    {
        id: '3',
        name: 'Slack',
        link: 'https://slack.com',
        description: `Free upgrades to paid plans for teams working on coronavirus pandemic
                    research, response, or mitigation. Interested teams can email a special 
                    address to get this set up, and a consultation on how best to get started 
                    with remote collaboration.`,
        tags: ['Communications'],
    },
    {
        id: '4',
        name: 'Comcast',
        link: 'https://wifi.xfinity.com/',
        description: `Free Xfinity WiFi for everyone, with hotspots available to all, including
                    non-Xfinity subscribers. To access the service, look for the 
                    "xfinitywifi" network name in a list of hotspots.`,
        tags: ['Communications'],
    },
    {
        id: '5',
        name: 'LogMeIn',
        link: 'https://blog.gotomeeting.com/coronavirus-disruptions-and-support/',
        description: `Free site-wide licensing for 3 months of its video conferencing solution, 
                    GoToMeeting, for eligible organizations (health-care providers, educational
                    institutions, municipalities and non-profits.)`,
        tags: ['Communications'],
    },
    {
        id: '6',
        name: 'Loom',
        link: 'https://www.loom.com/blog/coronavirus-response',
        description: `Free video recording and sharing service for teachers and students at K-12
                    schools, universities, and educational institutions. They have also removed
                    the recording limit on free plans and have cut the price for Loom Pro in half.`,
        tags: ['Communications'],
    },
    {
        id: '7',
        name: 'Intermedia',
        link: 'https://www.intermedia.net/anymeeting-video-conferencing',
        description: 'Free Video Conferencing for all of 2020, and Pro Video Conferencing until 2021.',
        tags: ['Communications'],
    },
    {
        id: '8',
        name: 'Vonage',
        link: 'https://www.vonage.com/unified-communications/campaigns/vertical-promo/',
        description: `Free 3 months of Vonage Business Communications services for educational, healthcare
                    and non-profit organizations within the US, UK, and Australia.`,
        tags: ['Communications'],
    },
    {
        id: '9',
        name: 'Vidyard',
        link: 'https://www.vidyard.com/press-releases/free-video-tools-during-covid-19/',
        description: 'Free secure video messaging to enchance internal communications for all businesses.',
        tags: ['Communications'],
    },
    {
        id: '10',
        name: 'Discord',
        link: 'https://blog.discordapp.com/helping-out-where-we-can-3a5fb7bac77a',
        description: `Free, enhanced Go Live streaming service so that it can now support 50 simultaneous users
                    rather than 10.`,
        tags: ['Communications'],
    },
    {
        id: '11',
        name: 'Soutbee',
        link: 'https://scoutbee.com/coronavirus-supply-chain-support/',
        description: 'Free supplier sourcing for industries, organizations, and governments needing COVID supplies.',
        tags: ['Supply Chain', 'Logistics'],
    },
    {
        id: '12',
        name: 'Project44',
        link: 'https://www.project44.com/blog/project44-offering-free-real-time-tracking-for-coronavirus-response-efforts',
        description: `Free transportation tracking for organizations including non-profits, NGOs, government agencies,
                    hospitals, pharmacies, and grocers to help them support coronavirus relief and prevention efforts.`,
        tags: ['Supply Chain', 'Logistics'],
    },
    {
        id: '13',
        name: 'FarEye',
        link: 'https://www.getfareye.com/fareye-fights-corona',
        description: `Free access to delivery optimization software for organizations making home deliveries of daily
                    essential items and for deliveries to hospital sites or supply of food and medicines.`,
        tags: ['Supply Chain', 'Logistics'],
    },
    {
        id: '14',
        name: 'Microsoft',
        link: 'https://docs.microsoft.com/en-us/microsoftteams/e1-trial-license',
        description: 'Free six-month Office 365 E1 Trial, including Microsoft Teams.',
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '15',
        name: 'Smartsheet',
        link: 'https://www.smartsheet.com/content-center/product-news/smartsheet-news/sharing-our-resources-amid-coronavirus-outbreak',
        description: `Free templates that can be used by other organizations to build their own coronavirus preparedness
                    dashboard, rich with CDC documentation and other resources, and related sheets and forms.`,
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '16',
        name: 'Docusign',
        link: 'https://www.docusign.com/',
        description: 'Free access to Docusign for managing electronic agreements',
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '17',
        name: 'Lucidchart',
        link: 'https://www.lucidchart.com/pages/',
        description: `Free single user account with access to Lucidchart introductory library and basic templates.
                    Lucidchart is the ultimate online collaboration platform where teams can share, collaborate,
                    visualize complex concepts and save their work in real-time.`,
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '18',
        name: 'Calendly',
        link: 'https://blog.calendly.com/meeting-integration-update/',
        description: `Free Zoom and GoToMeeting integrations for their online appointment scheduling software to help
                    remote workers stay connected. These were previously Premium tier features and will be available through
                    June 30th. Also Free premium plan access to teams working directly on COVID-19.`,
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '19',
        name: 'Evernote',
        link: 'https://evernote.com/basic',
        description: `Free sign up and access of Evernote Basic plan. Take notes. Keep a journal. Clip anything from the
                    web. Evernote lets you store and share information quickly and securely.`,
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '20',
        name: 'Miro',
        link: 'https://miro.com/signup/',
        description: `Free access to Miro's collaboration tool and core features. Free Education Plan for students for two
                    years, and for faculty forever. The Enterprise plan is available to Educators at 50 percent forever.`,
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '21',
        name: 'ClickUp',
        link: 'https://clickup.com/',
        description: `Free access to the productivity platform to help get all your tasks, docs, covnersations, goals, reminders
                    and more in one place.`,
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '22',
        name: 'JotForm',
        link: 'https://www.jotform.com/corona-responder-program/',
        description: 'Free healthcare forms to all first responders, healthcare workers, governmental agencies and nonprofits.',
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '23',
        name: 'FeedbackFruits',
        link: 'https://feedbackfruits.com/covid-19',
        description: `Free student engagement and assessment LMS tools for higher-ed teachers. You can make your videos, presentations,
                    and documents interactive and automatically assess student performance within LMS.`,
        tags: ['Collaboration', 'Productivity'],
    },
    {
        id: '24',
        name: 'Salesforce',
        link: 'https://www.salesforce.com/blog/2020/03/covid-19-care-response-solution-healthcare.html',
        description: `Free access to technology for emergency response teams, call centers, and care management teams for health systems
                    affected by coronavirus.`,
        tags: ['Marketing'],
    },
    {
        id: '25',
        name: 'Benchmark',
        link: 'https://www.benchmarkemail.com/',
        description: `Free trial of a powerfully simple email marketing solution designed to help you create and send compelling campaigns
                    with ease.`,
        tags: ['Marketing'],
    },
    {
        id: '26',
        name: 'GoDaddy',
        link: 'https://www.godaddy.com/garage/free-website-builder-covid-19/',
        description: `Free version of Websites + Marketing, the company's website builder with marketing tools built in, so that anyone can
                    quickly get their idea or business online and start generating income during the Covid-19 crisis. The free version includes
                    the option to publish a website with unlimited pages. It includes social media tools, email marketing, one-time appointments,
                    SSL, and PayPal. It also includes a gift card widget to help facilitate the purchase of gift cards.`,
        tags: ['Marketing'],
    },
    {
        id: '27',
        name: 'Keap',
        link: 'https://keap.com/marketing/infusionsoft-free-trial-for-CRM',
        description: 'Free access to trial with full features of CRM, email marketing, getting paid, appointments and more.',
        tags: ['Marketing'],
    },
    {
        id: '28',
        name: 'XANT',
        link: 'https://www.xant.ai/xant-cares/',
        description: `Free program that leverages the company's sales engagement platform, Playbooks, to help companies and individuals in sales or
                    revenue generation roles as they transition to a work-from-home setting.`,
        tags: ['Marketing'],
    },
    {
        id: '29',
        name: 'TigerConnect',
        link: 'https://tigerconnect.com/blog/communication-promise-for-patient-care-during-covid-19/',
        description: 'Free trial of a simple email marketing solution designed to help you create and send compelling campaigns with ease.',
        tags: ['Marketing'],
    },
    {
        id: '30',
        name: 'Affinity',
        link: 'https://affinity.serif.com/en-gb/',
        description: 'Free 90-day trial of all creative and publishing tools.',
        tags: ['Marketing'],
    },
    {
        id: '31',
        name: 'Cisco',
        link: 'https://blogs.cisco.com/security/cisco-expands-free-security-offerings-to-help-with-rise-in-remote-workers',
        description: `Free license for new customers of Duo Security's two-factor authentication tool, and current customers can go above their user limit
                    as their employees increasingly work from home. Same deal for its web security tool Umbrella and its VPN product AnyConnect, which is
                    available until July 1 (of 2020). Cisco is extending services for existing customers of Webex, its video conference platform. The offer
                    includes unlimited usage without time restriction, support for fewer than 100 participants and toll free dial-in.`,
        tags: ['Software Support', 'Software Security'],
    },
    {
        id: '32',
        name: 'Support.com',
        link: 'https://corporate.support.com/offering-free-tech-support-to-those-working-remotely-during-covid-19-outbreak/',
        description: 'Free tech support to anyone working or studying remotely right now.',
        tags: ['Software Support'],
    },
    {
        id: '33',
        name: 'Waterfall Security',
        link: 'https://www.sentinelone.com/press/covid-19-sentinelone-offers-free-platform-access-to-help-enterprises-around-the-globe-embrace-secure-remote-work-and-stay-protected/',
        description: 'Free Remote Screen View product licenses available to customers whose vendor personnel or key employees are no longer able to travel to industrial and critical infrastructure sites. Remote Screen View sends real-time images of industrial workstations to a web server that remote vendors can access.',
        tags: ['Software Support', 'Software Security'],
    },
    {
        id: '34',
        name: 'Carbonite',
        link: 'https://www.carbonite.com/data-protection/endpoint-protection',
        description: 'Free trials for 60 days of Carbonite Endpoint Protection and Carbonite Backup for Microsoft Office 365. Carbonite and Webroot are working to help SMBs and MSPs who are dealing with a remote workforce and overloaded networks to make cyber resilience simple, reliable and accessible.',
        tags: ['Software Support', 'Software Security'],
    },
    {
        id: '35',
        name: 'PagerDuty',
        link: 'https://www.pagerduty.com/blog/covid-19-supporting-our-community/',
        description: 'Free product licenses for healthcare organizations managing minute-to-minute COVID-19 response to keep systems running, and free licenses for all other new customers to help business teams across industries transition to distributed work.',
        tags: ['Software Support', 'Software Security'],
    },
    {
        id: '36',
        name: 'Connectify',
        link: 'https://speedify.com/download/',
        description: 'Free 10 GB per month for all new Speedify users. Speedify bonding VPN uses channel bonding technology to securely combine 2 or more connections together at once. You get faster, more reliable and secure Internet.',
        tags: ['Software Support', 'Software Security'],
    },
    {
        id: '36',
        name: 'Netsparker',
        link: 'https://www.netsparker.com/blog/news/netsparker-licenses-for-covid-relief/',
        description: 'Free Team licenses to help organizations keep their websites and web applications secure during this unprecedented global crisis. This is for organizations involved in fighting COVID-19.        ',
        tags: ['Software Support', 'Software Security'],
    },
    {
        id: '37',
        name: 'AdGuard',
        link: 'https://adguard.com/en/blog/stayhome.html',
        description: 'Free licenses during COVID-19 pandemic to make the web experience better for everyone while we all stay at home. AdGuard is a cross-platform ads and tracking blocker that has all the necessary features for a clean, ad-free, uninterrupted and private web surfing: Whole-system ad blocking Advanced privacy protection Traffic usage reduction Protection from phishing and malware Available for Windows, MacOS, iOS and Android platforms.',
        tags: ['Software Support', 'Software Security'],
    },
    {
        id: '38',
        name: 'Trustwave',
        link: 'https://www.trustwave.com/en-us/resources/blogs/trustwave-blog/covid-19-pandemic-cybersecurity-recommendations-and-free-resources/',
        description: 'Free Remote Work Security Information Pack. The informational pack from Trustwave Security Colony includes BYOD Device Security Checklist, Phishing Tips Sticker and more. Registration required.',
        tags: ['Software Support', 'Software Security'],
    },
    {
        id: '39',
        name: 'Qualtrics',
        link: 'https://www.qualtrics.com/here-to-help/',
        description: 'Free for all organizations to use Qualtrics Remote Work Pulse.',
        tags: ['Research', 'Development'],
    },
    {
        id: '41',
        name: 'Nvidia',
        link: 'https://blogs.nvidia.com/blog/2020/03/19/coronavirus-research-parabricks/',
        description: 'Free 90-day license to Parabricks to any researcher in the worldwide effort to fight the novel coronavirus.',
        tags: ['Research', 'Development'],
    },
    {
        id: '42',
        name: 'Carto',
        link: 'https://carto.com/blog/carto-free-for-fight-against-coronavirus/',
        description: 'Free visualization software for organizations fighting COVID-19.',
        tags: ['Research', 'Development'],
    },
    {
        id: '43',
        name: 'Wave',
        link: 'https://www.waveapps.com/pricing',
        description: 'Free financial software solutions (accounting, bookkeeping, invoicing) for small businesses to help with cash flow, which becomes increasingly important during economic turmoil. In response to COVID-19, Wave has reduced paid services where possible to active customers, in an effort to provide financial relief during a time of need.',
        tags: ['Finance', 'Accounting'],
    },
    {
        id: '44',
        name: 'RexPay',
        link: 'https://rexpay.com/covid',
        description: 'Free for a month to manage medical bill payments safely and conveniently.',
        tags: ['Finance', 'Accounting'],
    },
    {
        id: '45',
        name: 'Bill.com',
        link: 'https://help.bill.com/hc/en-us/articles/360041157731',
        description: 'ree 90-day subscription for new customers impacted by COVID-19. The cloud-based service helps small and mid-sized businesses to automate the processing of bills, generate invoices, send/receive payments, and manage their cash flows.',
        tags: ['Finance', 'Accounting'],
    },
    {
        id: '46',
        name: 'Workable',
        link: 'https://resources.workable.com/backstage/covid-19-coronavirus-ceo-message/',
        description: 'Free use of the new video interviewing software for all customers, and access to a library of Covid-19 response content for use by HR professionals and business leaders.',
        tags: ['People', 'Recruiting'],
    },
    {
        id: '47',
        name: 'Lever',
        link: 'https://www.lever.co/zoom/',
        description: 'Free video interviewing for 1:1s and panels via Zoom Integration. Lever’s recruiting software enables scheduling and joining Zoom meetings from within its app.',
        tags: ['People', 'Recruiting'],
    },
    {
        id: '48',
        name: 'Harver',
        link: 'https://harver.com/covid19/',
        description: 'Free pre-employment assessment platform for hiring at scale for those affected by COVID-19. Offer valid for at least 60 days. No strings attached.',
        tags: ['People', 'Recruiting'],
    },
    {
        id: '49',
        name: 'MeetFrank',
        link: 'https://meetfrank.com/business-relocation/',
        description: 'Free 30 days for companies and talent to meet based on their aspirations and skills.',
        tags: ['People', 'Recruiting'],
    },
    {
        id: '50',
        name: 'Novoresume',
        link: 'https://novoresume.com/covid19/',
        description: 'Free one-month access to all resume and cover letter templates in our Premium membership.',
        tags: ['People', 'Recruiting'],
    },
    {
        id: '51',
        name: 'Linkedin',
        link: 'https://www.linkedin.com/learning/paths/remote-working-setting-yourself-and-your-teams-up-for-success',
        description: 'Free 16 learning courses that provide tips on how to stay productive, build relationships when you’re not face-to-face, use virtual meeting tools and balance family and work dynamics in a healthy way.',
        tags: ['Education'],
    },
    {
        id: '52',
        name: 'Codeacademy',
        link: 'https://pro.codecademy.com/learn-from-home/',
        description: 'Free 10,000 scholarships to Codecademy Pro to high school and college students across the world for the rest of the school year.',
        tags: ['Education'],
    },
    {
        id: '53',
        name: 'Amazon',
        link: 'https://edhesive.com/amazon/free_access',
        description: 'Free online access to sponsored computer science courses in the United States. That is intended for learners in grades 6-12, and teachers who are remotely teaching this age group. Parents can also access this curriculum.',
        tags: ['Education'],
    },
    {
        id: '54',
        name: 'McGraw-Hill',
        link: 'https://www.mheducation.com/prek-12/explore/remote-learning.html',
        description: 'Free resources for out-of-school learning to help K-12 teachers make the transition to remote instruction.',
        tags: ['Education'],
    },
    {
        id: '55',
        name: 'Age of Learning',
        link: 'https://www.ageoflearning.com/',
        description: 'Free at-home access for families at affected schools to ABCmouse, a learning resource for ages 2 to 8.',
        tags: ['Education'],
    },
    {
        id: '56',
        name: 'ClassTag',
        link: 'https://home.classtag.com/schoolwide-demo/',
        description: 'Free communication platform available to help districts and schools communicate with their families. The software sends messages through SMS, email, apps and the web and automatically translates them into one of 55 languages. The platform can also be used to post videos, assignments and other resources for students to access at home and allow users to run virtual lessons with a video conferencing tool.',
        tags: ['Education'],
    },
    {
        id: '57',
        name: 'JetBrains',
        link: 'https://www.jetbrains.com/education/',
        description: 'Free project-based learning platform for students and teachers who need to continue their programming education.',
        tags: ['Education'],
    },
    {
        id: '58',
        name: 'Cengage',
        link: 'https://www.cengage.com/help/covid-19/?q=covid-19.html',
        description: 'Free access to Cengage Unlimited through the end of the current academic term for U.S. students attending colleges affected by COVID-19. This includes the entire Cengage catalog of eBooks, online courseware, study tools and more.',
        tags: ['Education'],
    },
    {
        id: '59',
        name: 'Kahoot!',
        link: 'https://kahoot.com/access-kahoot-premium-for-free/',
        description: 'Free access for teachers to Kahoot! Premium until your school starts.',
        tags: ['Education'],
    },
    {
        id: '60',
        name: 'Babbel',
        link: 'https://www.babbel.com/en/magazine/babbel-free-month-for-students-terms-conditions',
        description: 'Free month of language learning to all affected students.',
        tags: ['Education'],
    },
    {
        id: '61',
        name: 'Udacity',
        link: 'https://blog.udacity.com/2020/03/one-month-free-on-nanodegrees.html',
        description: 'Free month on one of 40 premium Nanodegree programs.',
        tags: ['Education'],
    },
    {
        id: '62',
        name: 'DataCamp',
        link: 'https://www.datacamp.com/community/blog/academic',
        description: 'Free access to more than 325 courses from DataCamp’s Classroom.',
        tags: ['Education'],
    },
    {
        id: '63',
        name: 'Shopify',
        link: 'https://www.shopify.com/covid19',
        description: 'Free 90-day trial for all new customers. If you’re currently on a 14-day trial, you can extend it to 90 days.',
        tags: ['General'],
    },
    {
        id: '64',
        name: 'Peloton',
        link: 'https://www.onepeloton.com/',
        description: 'Free 90-day trial of its subscription workout app as more gyms shut down in response to the coronavirus pandemic. The fitness freebie does not require a Peloton-branded bike or treadmill. Users can choose from classes such as yoga, meditation, strength training and more.',
        tags: ['General'],
    },
    {
        id: '65',
        name: 'U-Haul',
        link: 'https://www.uhaul.com/Articles/About/20625/College-Students-U-Haul-Offers-30-Days-Free-Self-Storage-amid-Coronavirus-Outbreak/',
        description: 'Free self-storage for 30 days to all college students who have been impacted by schedule changes at their universities.',
        tags: ['General'],
    },
    {
        id: '66',
        name: 'Headspace',
        link: 'https://www.headspace.com/covid-19',
        description: 'Free meditations you can listen to anytime.',
        tags: ['General'],
    },
    {
        id: '67',
        name: 'Calm',
        link: 'https://www.calm.com/blog/take-a-deep-breath',
        description: 'Free resources from Calm to take care of our minds and stay grounded, including content hand-picked to support your mental and emotional wellness through this time.',
        tags: ['General'],
    },
    {
        id: '68',
        name: 'Audible (Amazon)',
        link: 'https://stories.audible.com/',
        description: 'Free stories for kids of all ages to stream on your desktop, laptop, phone or tablet. For as long as schools are closed, we are open. Starting today, kids everywhere can instantly stream an incredible collection of stories, including titles across six different languages, that will help them continue dreaming, learning, and just being kids.',
        tags: ['General'],
    },
    {
        id: '69',
        name: 'Aura',
        link: 'https://www.aurahealth.io/blog',
        description: 'Free three months of access to the company’s mindfulness app.',
        tags: ['General'],
    },
    {
        id: '70',
        name: 'Core Power Yoga',
        link: 'https://www.corepoweryogaondemand.com/keep-up-your-practice',
        description: 'Free access to a new collection of online classes every week so you can keep your practice moving.',
        tags: ['General'],
    },
];