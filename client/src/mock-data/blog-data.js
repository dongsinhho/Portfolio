const blogs_data = [
    {
        id: 0,
        title: 'My first blog',
        description: 'This is my first blog',
        link: 'http://example.com/blog-one',
        post_date: new Date(),
        tags: [
            {
                name: 'Uncategorized',
                link: '/blog'
            }
        ],
        time_to_read: 300,
        content: "<p>Hi guys!</p><p>&nbsp;</p><p>I intended to have my own blog for a long time but kept postponing it for thousand reasons, like lazy, being busy, and side projects. Since I was in school as a child, it's hard to me to take a seat and write down something but somebody once said: \"The journey of a thousand miles begins with one step\" and now I'm starting my journey to record the knowledge I've gathered.</p><p>&nbsp;</p><p>This is to inform myself and anyone who is interested that the upcoming articles will be about computers, programming, networking and <span class=\"Y2IQFc\" lang=\"en\">things that interest me</span>. I'll be sharing knowledge from the projects I've worked on at the companies, as well as personal projects that apply to real life and solve real-life problems.</p><p>&nbsp;</p><p>I hope these articles will not only serve as a valuable resource for others but also as a way for me to continuously learn and stay updated in this fast-evolving field. By documenting and sharing this journey, I aim to create a community of like-minded individuals who are passionate about technology and innovation.</p><p>&nbsp;</p><p>I consider all this knowledge and these experiences to be the luggage I'll carry with me for the next steps!!!</p>"
    },
    {
        id: 1,
        title: 'Tiktok Crawler',
        description: 'How I built a tiktok crawler application by C#, NodeJs',
        link: 'http://example.com/blog-one',
        post_date: new Date(),
        tags: [
            {
                name: 'C#',
                link: '/blog'
            },
            {
                name: 'WPF',
                link: '/blog'
            },
            {
                name: 'NodeJs',
                link: '/blog'
            }
        ],
        time_to_read: 300,
        content: `<p>As a first freelance project, I think this is the most suitable topic for my first technical blog.<br>The reason I got this project was through a good-natured colleague of mine. The requirement is to create a windows application which can crawl all video of specific user without watermark. The topic sounds as easy as pie, but when I started doing it, I encountered many difficulties.</p><p>&nbsp;</p><h3>Research</h3><p>First, before I sign off on this, I took about 2 days to research the feasibility of the project. By research on the internet, I found some Tiktok API providers, here is my result:</p><p>Tiktok API for Developer</p><p>This page request developer sign up to get api key and access their data. After sign up and send request, took about 2 days to Tiktok reply. Unfortunately, Tiktok rejected</p><p>Third party API</p><p>Searching more online, I came across sites and have several PoC with Snaptik, Tikwm, Open.tiktokapis.com … , I found that with Open.TiktokApis.com provides api to download tiktok videos (no watermark) with quick response, unlimited access, however videos can only be downloaded based on the video ID.</p><p>So the next problem will be to have a list of user's video info.</p><p>&nbsp;</p><h3>Crawl Tiktok Data and Create WPF app</h3><p>&nbsp;</p><p>With dev tool on MicrosoftEgde we can easy to observe all request/response traffic in website. So I access tiktok.com to get all web data, realize that browser make request to tiktok.com/api/item_list/?… to get list user video with cursor.</p><p>However, Tiktok protects their API by signing URLs, prevent user scrape data, so we need to by pass this.</p><p>Take a litle bit of time, I found a repository of Carcabot which help me by pass this protection by simulate a device to sign on that URLs by using NodeJS with module “playwright-chromium” and then we can get list user video by the legal way.</p><p>&nbsp;</p><p>In parallel with researching ways to scrape tiktok data, I have also started building an application for windows that can scratch tiktok videos and manage videos on the user side.</p><p>About technologies, I choose C# WPF, because it is still a good choice for windows desktop apps for now, we can interfere deeply with the Windows system as well as work well with multithreading. On the other hand, I have experience working with a WPF project at my current and have some knowledge about it.</p><p>&nbsp;</p><p>Still MVVM architecture classical which helps developers create more structured, manageable, and scalable applications.</p><p>I divided structure into separate folder around a main screen, which handle most of the application's tasks. I need to create a really simple app focus on strong and optimal main functions, here is scrape Tiktok videos.</p><p>&nbsp;</p><p>After initializing the project skeleton with some basic functions, the main flow of operations is as follows:</p><p>&nbsp;</p><p>As you can see in the diagram above, we also need user UUID but easily, just only send GET request to tiktok.com/@username,&nbsp;<br>process the returned data with a few steps and we will have the user's information. Furthermore, getting list user video need to run via intermediate device emulation system.</p><p>On AWS, run an Linux EC2 VM and setup an API so windows app can send request and get list user video from that, something like this:</p><p>&nbsp;</p><p>Note: Playwright-chromium run on Linux need to be installed support package.</p><p>&nbsp;</p><p>Now everything quite good. I continue to complete the application by adding storage feature, manage user video and downloading multiple videos in parallel are indispensable. Complete UI with progress bar, sort, filter video, download selective video.</p><p>&nbsp;</p><p>Boom, everything is done, the final step is to package and transfer the project to customers to try and receive feedback.</p><p>In the packaging step, I use Wix toolset - a tool for packaging and creating MSI files, ease of use (some complex custom actions are not :&gt; )</p><p>&nbsp;</p><p>And that's what I had to research and do in my first freelance project. Although the application has many shortcomings and bugs, it is still a small achievement that I took the time to implement.</p><p>Thank you for reading !!!</p><p>&nbsp;</p><p>&nbsp;</p>`
    },
    {
        id: 2,
        title: 'WFP in Windows - Part 1',
        description: 'Sharing my little knowlegde about how windows protect it own system operation',
        post_date: new Date(),
        tags: [
            {
                name: 'C#',
                link: '/blog'
            },
            {
                name: 'WPF',
                link: '/blog'
            },
            {
                name: 'NodeJs',
                link: '/blog'
            }
        ],
        time_to_read: 300,
    },
    {
        id: 3,
        title: 'WFP in Windows - Part 2',
        description: 'Sharing my little knowlegde about how windows protect it own system operation',
        post_date: new Date(),
        tags: [
            {
                name: 'C#',
                link: '/blog'
            },
            {
                name: 'WPF',
                link: '/blog'
            },
            {
                name: 'NodeJs',
                link: '/blog'
            }
        ],
        time_to_read: 300
    },
    {
        id: 4,
        title: 'WFP in Windows - Part 3',
        description: 'Sharing my little knowlegde about how windows protect it own system operation',
        post_date: new Date(),
        tags: [
            {
                name: 'C#',
                link: '/blog'
            },
            {
                name: 'WPF',
                link: '/blog'
            },
            {
                name: 'NodeJs',
                link: '/blog'
            }
        ],
        time_to_read: 300
    },
    {
        id: 5,
        title: 'Captive Portal',
        description: 'What is captive portal and how it works',
        post_date: new Date(),
        tags: [
            {
                name: 'C#',
                link: '/blog'
            },
            {
                name: 'WPF',
                link: '/blog'
            },
            {
                name: 'NodeJs',
                link: '/blog'
            }
        ],
        time_to_read: 300
    },
    {
        id: 6,
        title: 'Develop Windows Application',
        description: 'WMI - Event Viewer - Logging - Registry Editor - Credential Manager - and more...',
        post_date: new Date(),
        tags: [
            {
                name: 'C#',
                link: '/blog'
            },
            {
                name: 'WPF',
                link: '/blog'
            },
            {
                name: 'NodeJs',
                link: '/blog'
            }
        ],
        time_to_read: 300
    },
    {
        id: 7,
        title: 'Back-end Knowledge',
        description: 'Python, NodeJs, road to C#',
        post_date: new Date(),
        tags: [
            {
                name: 'C#',
                link: '/blog'
            },
            {
                name: 'WPF',
                link: '/blog'
            },
            {
                name: 'NodeJs',
                link: '/blog'
            }
        ],
        time_to_read: 300
    },
];

export default blogs_data;