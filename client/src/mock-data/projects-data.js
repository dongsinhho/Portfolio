const projects_data = [
    {
        id: 1,
        title: 'Bike Rental System',
        description: 'Graduation project: Local K8S cluster providing API and WebSocket services to bike stations built on embedded computers. High availability, fault-tolerant clusters for monitoring and data storage.',
        tags: ['MERN Stack', 'Python', 'React Native', 'Kubernetes', 'Docker', 'Prometheus-Grafana'],
        links: [
            { label: 'System setup', url: 'https://github.com/dongsinhho/System-Setup' },
            { label: 'Backend', url: 'https://github.com/dongsinhho/Bike-Rental-System' },
            { label: 'Client app', url: 'https://github.com/dongsinhho/ReactNative-BikeRental' },
            { label: 'Edge Service', url: 'https://github.com/dongsinhho/BikeEdgeService' }
        ],
        media: []
    },
    {
        id: 2,
        title: 'Book Store',
        description: 'Web API using Django and DRF for managing a virtual bookstore with CRUD, pagination, filtering, and search. Secure, robust, and well-documented.',
        tags: ['Python', 'Django', 'PostgreSql'],
        links: [
            { label: 'GitHub', url: 'https://github.com/luongviethung31/b-book' }
        ],
        media: []
    },
    {
        id: 3,
        title: 'Homelab',
        description: 'Self-hosting website on Raspberry Pi Server at home.',
        tags: ['Cloudflare Tunnel', 'Docker', 'Go Fiber'],
        links: [
            { label: 'hndsinh.site', url: 'https://hndsinh.site' }
        ],
        media: []
    },
    {
        id: 4,
        title: 'CryptoTrack Realtime',
        description: 'API for monitoring cryptocurrency prices in real-time. Scrapes, cleans, caches, and provides real-time prices via sockets.',
        tags: ['Python', 'Django', 'Redis', 'PostgreSql', 'Docker'],
        links: [
            { label: 'GitHub', url: 'https://github.com/dongsinhho/marketFinance' }
        ],
        media: []
    },
    {
        id: 5,
        title: 'Data analytics platform',
        description: 'Windows app to scrape and download TikTok videos without watermarks. NodeJS for device emulation, video management, parallel downloads, AWS deployment.',
        tags: ['C#', 'WPF', 'NodeJS'],
        links: [],
        media: []
    },
    {
        id: 6,
        title: 'Blog Engine',
        description: 'Blog engine for personal use, learning .NET/EF Core and React. Platform for portfolio and knowledge sharing.',
        tags: ['C#', 'React', 'PostgreSql'],
        links: [
            { label: 'GitHub', url: 'https://github.com/dongsinhho/Portfolio' }
        ],
        media: []
    }
];

export default projects_data;