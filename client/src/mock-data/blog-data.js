const blogs_data = [
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
        content: `<div><h1>test thử xem sao</h1> 
        <h2>noi dung nay bip</h2></div>`
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
        content: ` <h2>Introduction</h2>
        <p>In this blog post, I will share the process of building a TikTok crawler application using C#. This application allows you to scrape TikTok videos and user data for analysis and other purposes.</p>

        <h2>Prerequisites</h2>
        <p>Before we start, ensure you have the following tools and libraries installed:</p>
        <ul>
            <li>Visual Studio</li>
            <li>.NET Framework</li>
            <li>HtmlAgilityPack</li>
            <li>Newtonsoft.Json</li>
        </ul>

        <h2>Step 1: Setting Up the Project</h2>
        <p>First, create a new C# project in Visual Studio. Choose a Console Application for simplicity. Name your project "TikTokCrawler".</p>

        <h2>Step 2: Installing Required Libraries</h2>
        <p>To install HtmlAgilityPack and Newtonsoft.Json, use the NuGet Package Manager. Open the Package Manager Console and run the following commands:</p>
        <pre>
            Install-Package HtmlAgilityPack
            Install-Package Newtonsoft.Json
        </pre>

        <h2>Step 3: Writing the Crawler Logic</h2>
        <p>Next, write the logic to fetch and parse TikTok data. Here is a simple example to get you started:</p>
        <pre>
            using System;
            using System.Net.Http;
            using HtmlAgilityPack;
            using Newtonsoft.Json.Linq;

            namespace TikTokCrawler
            {
                class Program
                {
                    static async System.Threading.Tasks.Task Main(string[] args)
                    {
                        string url = "https://www.tiktok.com/@someusername";
                        HttpClient client = new HttpClient();
                        var response = await client.GetStringAsync(url);

                        HtmlDocument doc = new HtmlDocument();
                        doc.LoadHtml(response);

                        var scripts = doc.DocumentNode.SelectNodes("//script[@type='application/json']");
                        foreach (var script in scripts)
                        {
                            var json = script.InnerText;
                            var data = JObject.Parse(json);
                            Console.WriteLine(data);
                        }
                    }
                }
            }
        </pre>

        <h2>Conclusion</h2>
        <p>With the steps outlined above, you can build a simple TikTok crawler application using C#. This basic example demonstrates fetching and parsing data, but you can extend it to collect specific information and handle more complex scenarios.</p>`
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