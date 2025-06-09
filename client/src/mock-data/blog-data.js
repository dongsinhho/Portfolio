const blogs_data = [
    {
        id: 0,
        slug: 'my-first-blog',
        title: 'My first blog',
        description: 'This is my first blog',
        link: 'http://example.com/blog-one',
        createdAt: new Date(),
        categories: [
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
        slug: 'tiktok-crawler',
        title: 'Tiktok Crawler',
        description: 'How I built a tiktok crawler application by C#, NodeJs',
        link: 'http://example.com/blog-one',
        createdAt: new Date(),
        categories: [
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
        slug: 'wfp-in-windows-part-1',
        title: 'WFP in Windows - Part 1',
        description: 'Sharing my little knowlegde about how windows protect it own system operation',
        createdAt: new Date(),
        categories: [
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
        content: `<article>
  <h1>Understanding the Windows Filtering Platform (WFP)</h1>
  
  <h2>1. Introduction to Windows Filtering Platform</h2>
  <p>The Windows Filtering Platform (WFP) is a Microsoft API and system service introduced in Windows Vista that enables user-mode and kernel-mode components to inspect, modify, or block network packets. It provides a flexible framework for building network filtering applications, such as firewalls, antivirus software, and network monitoring tools.</p>
  
  <h3>WFP Architecture</h3>
  <p>The WFP architecture is composed of several key layers and components that work together to process network traffic:</p>
  <ul>
    <li><strong>Filtering Engine:</strong> Core service that manages filter rules and packet processing.</li>
    <li><strong>Base Filtering Engine (BFE):</strong> Windows service that loads and enforces filters.</li>
    <li><strong>Callout Drivers:</strong> Custom drivers that receive callbacks at specified layers to inspect or modify packets.</li>
    <li><strong>Filtering Layers:</strong> Predefined packet processing points (e.g., inbound/outbound, transport, application).</li>
    <li><strong>Filters:</strong> Rules that specify conditions under which callouts are invoked.</li>
  </ul>
  
  <h3>Core Components</h3>
  <ul>
    <li><strong>Callouts:</strong> Entry points for custom logic in both kernel-mode and user-mode.</li>
    <li><strong>Filters:</strong> Definitions that match specific packet attributes or network events.</li>
    <li><strong>Layers:</strong> Points in the networking stack where filtering can occur.</li>
    <li><strong>Providers:</strong> Modules that register callouts and filters with the engine.</li>
    <li><strong>Provider Contexts:</strong> Optional storage of additional state for callouts.</li>
  </ul>
  
  <h3>Applications of WFP</h3>
  <p>WFP is utilized by numerous Windows networking and security solutions, including:</p>
  <ul>
    <li>Windows Defender Firewall: Built-in host-based firewall using WFP for packet filtering.</li>
    <li>CrowdStrike Falcon: Endpoint protection leveraging WFP callouts for threat detection.</li>
    <li>Virtual Private Network (VPN) clients: Inspect and redirect traffic through secure tunnels.</li>
  </ul>
  
  <h2>2. Implementation Overview</h2>
  <h3>Language Support Libraries</h3>
  <p>Developers can leverage different programming languages to build WFP-based applications:</p>
  <ul>
    <li><strong>C#:</strong> User-mode wrappers such as <code>Windows Firewall API</code> or <code>WFPManaged</code>.</li>
    <li><strong>C++:</strong> Native Windows Driver Kit (WDK) libraries recommended for kernel-mode callouts.</li>
    <li><strong>Golang:</strong> Using <code>fwpuclnt.dll</code> through cgo as demonstrated by WireGuard's Windows client.</li>
  </ul>
  <p><em>Note:</em> For kernel-mode drivers, C++ with WDK is the preferred choice for stability and performance.</p>
  
  <h3>Simple Usage Examples</h3>
  <p><strong>C#:</strong> Creating a basic filter with <code>WfpEngine.AddFilter</code> in user-mode.</p>
  <p><strong>C++:</strong> Registering a callout driver with <code>FwpmEngineOpen0</code> and <code>FwpmCalloutAdd0</code>.</p>
  <p><strong>Golang:</strong> Loading <code>fwpuclnt.dll</code> via <code>syscall.LoadLibrary</code> and invoking <code>FwpmSessionCreateEnumHandle0</code>.</p>
  
  <h2>3. Building a Basic WFP Application</h2>
  <ol>
    <li><strong>Create a Session:</strong> Open an engine handle with <code>FwpmEngineOpen0</code> or equivalent.</li>
    <li><strong>Begin a Transaction:</strong> Group filter operations atomically using <code>FwpmTransactionBegin0</code>.</li>
    <li><strong>Register Callout:</strong> Define and add callout structures with <code>FwpmCalloutAdd0</code>.</li>
    <li><strong>Provider Context:</strong> Create optional context objects for callouts.</li>
    <li><strong>Add Filters:</strong> Configure <code>FWPM_FILTER0</code> structures and conditions.</li>
    <li><strong>Commit Transaction:</strong> Finalize with <code>FwpmTransactionCommit0</code>.</li>
    <li><strong>Security Descriptor:</strong> Assign ACLs to filters for access control.</li>
  </ol>
  
  <h3>Key Considerations</h3>
  <ul>
    <li>Avoid overly complex filter conditions to maintain performance.</li>
    <li>Ensure proper error handling to prevent Blue Screen of Death (BSOD).</li>
    <li>Stick to kernel-mode for deep packet inspection; user-mode is limited.</li>
  </ul>
  
  <h2>4. Conclusion</h2>
  <p>The Windows Filtering Platform offers a robust and extensible framework for network packet inspection and manipulation on Windows. By understanding its architecture and leveraging the appropriate language libraries, developers can build secure and efficient network filtering solutions.</p>
</article>`
    },
    {
        id: 3,
        slug: 'wfp-in-windows-part-2',
        title: 'WFP in Windows - Part 2',
        description: 'Sharing my little knowlegde about how windows protect it own system operation',
        createdAt: new Date(),
        categories: [
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
        content: `<article>
  <h1>Deep Dive: Developing with the Windows Filtering Platform</h1>
  
  <h2>1. What is WFP?</h2>
  <p>At its core, the Windows Filtering Platform is a modular framework that intercepts network I/O at multiple layers. It allows applications to register callouts that can inspect, modify, or block packets based on custom logic. Introduced in Windows Vista, WFP unifies legacy filtering technologies (like TDI and LSP) under a single, modern API.</p>
  
  <h2>2. WFP Architecture Explained</h2>
  <ul>
    <li><strong>Data Layers:</strong> Include ALE (Application Layer Enforcement), Transport, and Network layers.</li>
    <li><strong>Callout Drivers:</strong> Plug-in components loaded by the Filter Manager.</li>
    <li><strong>Filter Engine:</strong> Coordinates filter evaluation and callout dispatch.</li>
  </ul>
  
  <h3>Component Details</h3>
  <table>
    <tr><th>Component</th><th>Description</th></tr>
    <tr><td>Filter</td><td>Rule matching specific packet attributes.</td></tr>
    <tr><td>Callout</td><td>Callback routine invoked by the filtering engine.</td></tr>
    <tr><td>Layer</td><td>Designated interception point in the network stack.</td></tr>
    <tr><td>Provider Context</td><td>Custom state or configuration data for callouts.</td></tr>
  </table>
  
  <h2>3. Real-World Uses</h2>
  <p>Modern security and networking tools rely on WFP for advanced packet control:</p>
  <ul>
    <li>Windows Firewall uses WFP for host-based filtering.</li>
    <li>CrowdStrike integrates WFP callouts for malware detection.</li>
    <li>VPN solutions route traffic securely at the network layer.</li>
  </ul>
  
  <h2>4. Implementing WFP in Different Languages</h2>
  <h3>C# Example</h3>
  <pre><code>using (var engine = WfpEngine.Open()) {
    var filter = new WfpFilter { /* set conditions */ };
    engine.AddFilter(filter);
  }</code></pre>
  
  <h3>C++ Kernel-Mode Snippet</h3>
  <pre><code>FWPM_CALLOUT callout = {0};
callout.calloutKey = MY_CALLOUT_GUID;
callout.classifyFn = MyClassifyFn;
FwpmCalloutAdd0(engineHandle, &callout, NULL, NULL);</code></pre>
  
  <h3>Golang Interoperability</h3>
  <pre><code>dll, _ := syscall.LoadLibrary("fwpuclnt.dll")
// FwpmSessionCreateEnumHandle0 via syscall.Syscall
</code></pre>
  <p><em>Tip:</em> Leverage cgo to bind to native WFP functions.</p>
  
  <h2>5. Building a Basic WFP App</h2>
  <ol>
    <li><strong>Session &amp; Transaction:</strong> <code>FwpmEngineOpen0</code>, <code>FwpmTransactionBegin0</code>.</li>
    <li><strong>Callout &amp; Provider:</strong> Register callout and define provider context.</li>
    <li><strong>Filter &amp; Conditions:</strong> Set <code>FWPM_FILTER0</code> and <code>FWPM_FILTER_CONDITION0</code> entries.</li>
    <li><strong>Commit &amp; Security:</strong> <code>FwpmTransactionCommit0</code>; assign a security descriptor.</li>
  </ol>
  
  <h3>Security Descriptor Options</h3>
  <p>Define SDDL strings to restrict who can add or remove filters. Example:</p>
  <pre><code>SDDL: "D:(A;;GA;;;S-1-5-32-544)"</code></pre>
  
  <h2>6. Best Practices and Caveats</h2>
  <ul>
    <li>Minimize complexity in filter conditions for performance stability.</li>
    <li>Thoroughly test kernel drivers to avoid system crashes (BSOD).</li>
    <li>Prefer user-mode for simple inspections; kernel-mode for high performance.</li>
  </ul>
  
  <h2>7. Conclusion</h2>
  <p>By mastering the Windows Filtering Platform, developers can implement sophisticated network filtering and security features. Whether using C#, C++, or Go, understanding sessions, transactions, callouts, and filters is key to building robust WFP solutions.</p>
</article>
`
    },
    {
        id: 5,
        slug: 'captive-portal',
        title: 'Captive Portal',
        description: 'What is captive portal and how it works',
        createdAt: new Date(),
        categories: [
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
        content: `<h2>Introduction</h2>
                <p>In today's connected world, it's common to encounter Wi-Fi networks that require some form of login or acceptance of terms before granting full internet access. These networks often use a <strong>captive portal</strong> to manage user access. Simultaneously, modern operating systems like Windows include mechanisms to automatically detect whether a network actually provides internet connectivity. In this post, we’ll explore:</p>
                <ul>
                <li><strong>What a captive portal is</strong>, and how it functions under the hood.</li>
                <li><strong>How Windows detects if the internet is available</strong>, including the specific checks performed by the Network Connectivity Status Indicator (NCSI).</li>
                <li><strong>How captive portals and Windows' detection mechanisms interact</strong>, explaining why you sometimes see “No internet access” until you log in through the portal.</li>
                </ul>

                <h2>What Is a Captive Portal?</h2>
                <p>A <strong>captive portal</strong> is a web page displayed to newly connected users of a Wi-Fi or wired network before they are granted broader access to network resources. Captive portals are commonly used in public venues such as airports, hotels, coffee shops, and corporate guest networks. They typically require users to authenticate, accept terms of service, complete a payment, or fill out a form before granting full internet access.<sup><a href="#ref1">[1]</a></sup><sup><a href="#ref2">[2]</a></sup></p>
                <p>Key reasons for deploying captive portals include:</p>
                <ul>
                <li><strong>Authentication &amp; identification</strong>: Ensure that only authorized or tracked users can use the network.</li>
                <li><strong>Terms acceptance</strong>: Force users to agree to acceptable-use policies or display legal disclaimers.</li>
                <li><strong>Monetization</strong>: Provide tiered internet access, upsell paid plans, or collect user data for marketing.</li>
                <li><strong>Bandwidth management</strong>: Enforce session limits, data caps, or prioritize certain traffic types.</li>
                </ul>
                <p>Without a captive portal, a guest network typically allows any connecting device to start sending IP, DNS, or HTTP traffic immediately. With a captive portal in place, though, <strong>all outgoing traffic</strong> (apart from certain whitelisted endpoints) is caught and redirected until the user completes the captive-portal workflow.</p>

                <h2>How a Captive Portal Works</h2>
                <p>Although implementations vary, most captive portals follow these general steps:</p>
                <ol>
                <li>
                    <strong>Client Association</strong>
                    <p>A device (laptop, smartphone, etc.) connects to the Wi-Fi SSID (or plugs into a wired guest port). The access point or gateway assigns the device an IP address via DHCP but places it in a restricted state (no real outbound access yet).</p>
                </li>
                <li>
                    <strong>DNS/HTTP Interception</strong>
                    <p>When the user's browser attempts to load any website (e.g., <code>http://example.com</code>), the gateway intercepts that HTTP request. If the destination domain is not on a small “allowlist,” the gateway sends an HTTP 302 redirect to the captive portal's login page (e.g., <code>http://10.0.0.1/login</code>).</p>
                </li>
                <li>
                    <strong>Allowlist for Portal Detection</strong>
                    <p>Many captive portals implement a minimal DNS allowlist so that specific hostnames used by operating systems (e.g., Windows’ NCSI endpoints) are still resolvable. However, even if DNS looks up an allowlisted hostname, the HTTP GET to that endpoint will often still redirect to the portal until login is complete.</p>
                </li>
                <li>
                    <strong>User Authentication/Agreement</strong>
                    <p>The user is presented with a web form—this might be a username/password prompt, a social-login button, a credit-card payment form, or simply a checkbox to accept terms and conditions. Upon successful login or acceptance, the gateway marks the client’s MAC or IP as “authenticated.”</p>
                </li>
                <li>
                    <strong>Network Policy Update</strong>
                    <p>The gateway’s firewall/policy engine updates to allow unrestricted (or limited-per-policy) outbound traffic from the authenticated client. At this point, DNS lookups, HTTP(s) requests, and all other traffic flow normally.</p>
                </li>
                <li>
                    <strong>Session Management</strong>
                    <p>Many portals implement session timeouts (e.g., 2 hours) or bandwidth quotas. When these limits are reached, the portal can force re-authentication or redirect again to a payment/renewal page.</p>
                </li>
                </ol>
                <p>A simplified flow:</p>
                <pre><code>[Device connects → IP via DHCP &amp; MAC logged] 
                        ↓
                [User opens browser &amp; requests any URL]
                        ↓
                [Gateway intercepts → Responds: HTTP 302 → captive-portal/login]
                        ↓
                [User logs in / clicks “Accept”]
                        ↓
                [Gateway updates policy: allow traffic]
                        ↓
                [User can now browse freely]
                </code></pre>
                <p><em>Source:</em> “Captive portal” (Wikipedia)<sup><a href="#ref1">[1]</a></sup></p>

                <h2>How Windows Detects Internet Availability</h2>
                <p>Windows uses a background service known as <strong>Network Connectivity Status Indicator (NCSI)</strong> to determine whether a network connection actually has unrestricted internet access. This check drives the “Internet access,” “No internet access,” or “Captive portal” icons you see in the system tray.</p>
                <p>The core steps of NCSI are:</p>
                <ol>
                <li>
                    <strong>DNS Probe</strong>
                    <p>Windows attempts to resolve a special DNS hostname: <code>dns.msftncsi.com</code>. The expected IP address for that hostname is <code>131.107.255.255</code>. If DNS does not resolve or returns a different IP, Windows may conclude there’s a DNS or network issue.<sup><a href="#ref3">[3]</a></sup></p>
                </li>
                <li>
                    <strong>HTTP Probe</strong>
                    <p>Windows performs an HTTP GET request to a known Microsoft endpoint: <code>http://www.msftconnecttest.com/connecttest.txt</code>. The expected response body is exactly the text: “Microsoft Connect Test.” If Windows receives this exact plaintext response (status code 200 OK), it infers that the network has full internet connectivity.<sup><a href="#ref3">[3]</a></sup></p>
                </li>
                <li>
                    <strong>HTTPS Probe (fallback, Windows 10+)</strong>
                    <p>On newer Windows versions, an HTTPS endpoint is also checked: <code>https://www.msftconnecttest.com/connecttest.txt</code>. This helps detect captive portals that intercept only HTTP traffic, since an HTTPS redirect will fail or be blocked by an invalid certificate.<sup><a href="#ref4">[4]</a></sup></p>
                </li>
                <li>
                    <strong>Network Status Determination</strong>
                    <p><strong>All probes succeed</strong> → Network status is “Connected” (internet available).<br>
                    <strong>DNS resolves but HTTP returns a redirect to a portal</strong> or returns unexpected content → Windows shows a “Captive portal” warning and often pops up a browser window directing the user to the login page.<br>
                    <strong>DNS resolution fails</strong> or other probes fail → Windows flags “No internet access.”<sup><a href="#ref3">[3]</a></sup></p>
                </li>
                </ol>
                <p>NCSI runs these checks periodically (every few minutes) and updates the Network flyout icon accordingly. Applications or Windows features that care about connectivity can listen for these status changes.</p>
                <p><em>Source:</em> “No Internet Error on Windows - NCSI Troubleshooting” (Cat Networks Support)<sup><a href="#ref3">[3]</a></sup></p>

                <h2>Windows' Internet Detection vs. Captive Portals</h2>
                <p>Because captive portals intercept HTTP traffic, NCSI's HTTP probe often triggers a redirect to the portal's login page instead of returning the expected <code>connecttest.txt</code>. When Windows sees an HTTP redirect—or if the HTTPS probe fails due to certificate interception—it concludes that:</p>
                <ul>
                <li><strong>A portal is present</strong> (rather than a simple network outage).</li>
                <li>Windows then surfaces a “Sign in to network” notification. If the user clicks it, Windows will open the default browser (or a minimal captive-portal browser) to the portal’s landing page.</li>
                </ul>
                <p>Only after the user logs in through the portal will subsequent NCSI probes succeed and Windows flip the status to “Internet access.”</p>

                <h3>Example Sequence with a Captive Portal</h3>
                <ol>
                <li><strong>Connect to Wi-Fi SSID “CoffeeShop_WiFi”.</strong></li>
                <li><strong>Windows obtains an IP address</strong> (e.g., <code>192.168.1.50</code>) and attempts NCSI DNS → succeeds.<sup><a href="#ref3">[3]</a></sup></li>
                <li><strong>Windows sends HTTP GET</strong> to <code>http://www.msftconnecttest.com/connecttest.txt</code>.</li>
                <p><em>Gateway intercepts</em> and replies with an HTTP 302 → <code>http://192.168.1.1/portal/login</code>.</p>
                <li><strong>Windows sees the redirect</strong> (not the expected plaintext), so it shows “No Internet, sign-in required” bubble.</li>
                <li><strong>User clicks the notification</strong> or opens a browser → redirected to the CoffeeShop's login page.</li>
                <li><strong>User enters credentials / clicks “Accept terms”</strong> → portal marks <code>192.168.1.50</code> as allowed.</li>
                <li><strong>Windows repeats NCSI</strong>: DNS → OK; HTTP → returns “Microsoft Connect Test”.<sup><a href="#ref3">[3]</a></sup></li>
                <li><strong>Windows updates icon</strong> to “Internet access.”</li>
                </ol>

                <h2>Why Windows Chooses Microsoft Endpoints</h2>
                <ul>
                <li><strong>Reliability</strong>: Microsoft endpoints are highly available and distributed via a CDN, minimizing false negatives due to server downtime.</li>
                <li><strong>Simplicity</strong>: A known static hostname (<code>www.msftconnecttest.com</code>) and a small text file ensure minimal bandwidth usage.</li>
                <li><strong>Control</strong>: Since the response content is fixed, Windows can confidently assert “unrestricted internet” only if it matches exactly.</li>
                </ul>
                <p>Other operating systems employ similar mechanisms (e.g., Apple's <code>captive.apple.com</code> or Android's <code>clients3.google.com/generate_204</code>), but the principle remains consistent: <em>probe a known URL and check for a particular response</em>.</p>
                <p><em>Source:</em> “Network Connectivity Status Indicator FAQ for Windows” (Microsoft Docs)<sup><a href="#ref4">[4]</a></sup></p>

                <h2>Additional Details &amp; Edge Cases</h2>
                <ol>
                <li>
                    <strong>HTTPS Redirects</strong>
                    <p>Modern captive portals sometimes attempt to redirect HTTPS traffic. Because certificates won't match the intended hostname, Windows treats that as an interception, signaling a captive portal. If the portal tries to downgrade HTTPS to HTTP, Windows still blocks it—modern browsers and OS-level network stacks enforce HSTS or show certificate warnings.<sup><a href="#ref3">[3]</a></sup></p>
                </li>
                <li>
                    <strong>Custom or Enterprise Networks</strong>
                    <p>In corporate environments, administrators can override NCSI by pushing group-policy settings that point Windows to internal “connectivity test” servers. This avoids false positives when internal firewalls block internet-bound probes.</p>
                </li>
                <li>
                    <strong>Limited Connectivity Without Captive Portal</strong>
                    <p>If a network has DNS but no internet gateway, NCSI may still see DNS resolve correctly and mark the network as “Connected” until the HTTP probe fails repeatedly. After a few retries, Windows will transition to “No Internet.” Conversely, a portal that allows DNS but blocks HTTP will immediately show “Captive portal,” even though a naive DNS check may have looked successful.<sup><a href="#ref3">[3]</a></sup></p>
                </li>
                <li>
                    <strong>Timing of Probes</strong>
                    <p>NCSI kicks off its initial DNS/HTTP probes within a few seconds after connecting. If those probes fail, Windows will often display a “Limited connectivity” warning almost immediately, guiding users to sign in.</p>
                </li>
                </ol>

                <h2>Practical Tips for Users and Administrators</h2>
                <h3>Users</h3>
                <ul>
                <li>If you see a “No Internet, sign-in required” message after connecting to Wi-Fi, open any browser and try navigating to a non-HTTPS site (e.g., <code>http://neverssl.com</code>). You should get redirected to the login page.</li>
                <li>Some devices may cache old NCSI results. If you are sure you've completed the portal login but Windows still says “Limited,” try toggling Wi-Fi off and on or rebooting.</li>
                </ul>

                <h3>Administrators</h3>
                <ul>
                <li>If you manage a captive portal, ensure that your gateway's allowlist includes the NCSI DNS hostname (<code>dns.msftncsi.com</code>) and the HTTP endpoint. Otherwise, Windows might not correctly detect the presence of the portal.</li>
                <li>To avoid confusing end users, configure your portal to return an HTTP 200 with a minimal page (rather than an opaque 404 or error) on requests to <code>connecttest.txt</code> so that Windows clearly understands “I'm a captive portal” instead of “No internet.”</li>
                </ul>

                <h2>Conclusion</h2>
                <p>Captive portals are a widespread mechanism for gating internet access in hospitality venues, educational institutions, and many public spaces. They function by intercepting DNS and HTTP requests, redirecting unauthenticated clients to a login or terms-acceptance page. Meanwhile, Windows uses its NCSI service—employing DNS resolutions and an HTTP probe to Microsoft's <code>connecttest.txt</code>—to classify network connectivity states, including detecting captive portals.</p>
                <p>Understanding how these pieces fit together can help both end users (who want to troubleshoot “No Internet” messages) and network administrators (who want to configure portals correctly) ensure a smoother connection experience. By recognizing the interplay between captive-portal interception and Windows' connectivity checks, you can more quickly resolve “sign-in required” issues and help users get online with minimal friction.</p>

                <h2>References</h2>
                <ol>
                <li id="ref1"><a href="https://en.wikipedia.org/wiki/Captive_portal">“Captive portal” - Wikipedia</a>.</li>
                <li id="ref2"><a href="https://www.techtarget.com/searchmobilecomputing/definition/captive-portal">“What is a captive portal? - TechTarget Definition”</a>.</li>
                <li id="ref3"><a href="https://support.catonetworks.com/hc/en-us/articles/13097064458525-No-Internet-Error-on-Windows-NCSI-Troubleshooting">“No Internet Error on Windows – NCSI Troubleshooting” – Cat Networks Support</a>.</li>
                <li id="ref4"><a href="https://learn.microsoft.com/en-us/windows-server/networking/ncsi/ncsi-frequently-asked-questions">“Network Connectivity Status Indicator FAQ for Windows” – Microsoft Docs</a>.</li>
                </ol>`
    },
    {
        id: 6,
        slug: 'develop-windows-application',
        title: 'Develop Windows Application',
        description: 'WMI - Event Viewer - Logging - Registry Editor - Credential Manager - and more...',
        createdAt: new Date(),
        categories: [
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
        content: `<article>
                <h1>Developing Windows Applications: In-Depth Guide</h1>
                
                <p>Building professional Windows applications involves leveraging a variety of OS services, APIs, and best practices. Below is a detailed exploration of the key components you must master to deliver secure, performant, and maintainable software.</p>
                
                <section>
                    <h2>1. Windows Management Instrumentation (WMI)</h2>
                    <p><strong>Tool Overview:</strong> WMI provides a unified interface for querying system information, managing hardware, and controlling services. It’s essential for monitoring performance, automating administrative tasks, and gathering diagnostics data within your application.</p>
                    <p><strong>Use Cases:</strong> Real-time hardware health checks, service status alerts, inventory reporting.</p>
                    <p><strong>Code Example:</strong></p>
                    <pre><code>using System.Management;

                var searcher = new ManagementObjectSearcher(
                    "SELECT Name, FreePhysicalMemory FROM Win32_OperatingSystem");
                foreach (var obj in searcher.Get()) {
                    Console.WriteLine($"OS: {obj["Name"]}, Free RAM: {obj["FreePhysicalMemory"]} KB");
                }</code></pre>
                </section>
                
                <section>
                    <h2>2. Event Viewer & Event Logs</h2>
                    <p><strong>Tool Overview:</strong> The Windows Event Log service records system, security, and application events. Integrating log writes into your app allows administrators to monitor usage, errors, and security incidents effectively.</p>
                    <p><strong>Use Cases:</strong> Auditing user actions, tracking application errors, diagnosing deployment issues.</p>
                    <p><strong>Code Example:</strong></p>
                    <pre><code>using System.Diagnostics;

                if (!EventLog.SourceExists("MyAppSource")) {
                    EventLog.CreateEventSource("MyAppSource", "Application");
                }
                EventLog.WriteEntry("MyAppSource", "Application started", EventLogEntryType.Information);

                // Reading logs:
                var logs = new EventLog("Application");
                foreach (EventLogEntry entry in logs.Entries.Cast<EventLogEntry>().Where(e => e.Source == "MyAppSource")) {
                    Console.WriteLine($"[{entry.TimeGenerated}] {entry.Message}");
                }
                </code></pre>
                </section>
                
                <section>
                    <h2>3. Structured Logging Frameworks</h2>
                    <p><strong>Tool Overview:</strong> Frameworks like Serilog, NLog, and log4net provide extensible logging pipelines (sinks) to files, consoles, or external services. They support structured data, enrichers, and filters for advanced log management.</p>
                    <p><strong>Use Cases:</strong> Correlating requests, shipping logs to ELK/Seq, dynamic log level control in production.</p>
                    <p><strong>Code Example (Serilog):</strong></p>
                    <pre><code>Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .WriteTo.Console()
                .WriteTo.File("logs\\myapp.txt", rollingInterval: RollingInterval.Day)
                .CreateLogger();

                Log.Information("Starting up");
                </code></pre>
                </section>
                
                <section>
                    <h2>4. Windows Registry</h2>
                    <p><strong>Tool Overview:</strong> The Registry is a hierarchical database for storing configuration settings. Reading and writing registry keys lets your app persist settings, integrate with OS-level configurations, and detect installed components.</p>
                    <p><strong>Use Cases:</strong> Feature toggles, installation paths, licensing information.</p>
                    <p><strong>Code Example:</strong></p>
                    <pre><code>using Microsoft.Win32;

                // Write
                using (var key = Registry.CurrentUser.CreateSubKey("Software\\MyApp")) {
                    key.SetValue("InstallPath", "C:\\Program Files\\MyApp");
                }
                // Read
                using (var key = Registry.CurrentUser.OpenSubKey("Software\\MyApp")) {
                    var path = key.GetValue("InstallPath");
                }
                </code></pre>
                </section>
                
                <section>
                    <h2>5. Credential Manager</h2>
                    <p><strong>Tool Overview:</strong> Windows Credential Manager securely stores user credentials. Integrating with it ensures sensitive data (passwords, tokens) are encrypted and managed by the OS vault.</p>
                    <p><strong>Use Cases:</strong> Single Sign-On tokens, service account credentials, encrypted API keys.</p>
                    <p><strong>Code Example (P/Invoke):</strong></p>
                    <pre><code>[DllImport("advapi32.dll", SetLastError=true)]
                static extern bool CredWrite(ref CREDENTIAL credential, uint flags);

                // Construct and call CredWrite to store credentials
                </code></pre>
                </section>
                
                <section>
                    <h2>6. P/Invoke & Native Windows APIs</h2>
                    <p><strong>Tool Overview:</strong> Platform Invocation Services (P/Invoke) allows managed code to call unmanaged Windows APIs directly. This unlocks low-level OS functionality unavailable in .NET base libraries.</p>
                    <p><strong>Use Cases:</strong> Custom UI interactions, advanced networking, process control.</p>
                    <p><strong>Code Example:</strong></p>
                    <pre><code>[DllImport("user32.dll", CharSet=CharSet.Auto)]
                static extern int MessageBox(IntPtr hWnd, String text, String caption, uint type);

                MessageBox(IntPtr.Zero, "Hello", "Title", 0);
                </code></pre>
                </section>
                
                <section>
                    <h2>7. COM Interop</h2>
                    <p><strong>Tool Overview:</strong> COM components provide reusable functionality across applications. .NET COM Interop enables using Office automation, shell extensions, and legacy libraries within managed code.</p>
                    <p><strong>Use Cases:</strong> Excel/Word automation, ActiveX controls, Windows Shell integration.</p>
                    <p><strong>Code Example:</strong></p>
                    <pre><code>// Reference the Microsoft Excel Object Library var excel = new Microsoft.Office.Interop.Excel.Application(); excel.Visible = true;
                // Use Marshal.FinalReleaseComObject to clean up
                </code></pre>
                </section>
                
                <section>
                    <h2>8. Windows Services & Task Scheduler</h2>
                    <p><strong>Tool Overview:</strong> Windows Services run in the background without UI, managed by the Service Control Manager. Task Scheduler automates tasks on a schedule or trigger basis.</p>
                    <p><strong>Use Cases:</strong> Background data processing, periodic maintenance, automated backups.</p>
                    <p><strong>Code Example (Worker Service):</strong></p>
                    <pre><code>public class Worker : BackgroundService {
                protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
                    while (!stoppingToken.IsCancellationRequested) {
                    // work
                    await Task.Delay(1000, stoppingToken);
                    }
                }
                }
                </code></pre>
                </section>
                
                <section>
                    <h2>9. Deployment & Installers</h2>
                    <p><strong>Tool Overview:</strong> Installer frameworks like WiX, Inno Setup, and Squirrel package your application for distribution. They handle file copying, registry updates, shortcuts, and prerequisites.</p>
                    <p><strong>Use Cases:</strong> MSI-based installs, auto-updates, handling .NET prerequisites.</p>
                    <p><strong>Code Example (WiX):</strong></p>
                    <pre><code><Product Id="*" Name="MyApp" Language="1033" Version="1.0.0.0" Manufacturer="MyCompany">
                <Package InstallerVersion="500" Compressed="yes" />
                <Directory Id="TARGETDIR" Name="SourceDir">
                    <Directory Id="ProgramFilesFolder">
                    <Directory Id="INSTALLFOLDER" Name="MyApp" />
                    </Directory>
                </Directory>
                <ComponentGroupRef Id="ProductComponents" />
                </Product>
                </code></pre>
                </section>
                
                <section>
                    <h2>10. Security & UAC</h2>
                    <p><strong>Tool Overview:</strong> User Account Control (UAC) enforces privilege boundaries. Application manifests define required execution levels, ensuring your app runs with appropriate permissions and prompts for elevation when needed.</p>
                    <p><strong>Use Cases:</strong> Accessing protected resources, installation wizards, system diagnostics tools.</p>
                    <p><strong>Code Example (Manifest):</strong></p>
                    <pre><code><requestedExecutionLevel level="asInvoker" uiAccess="false" /></code></pre>
                </section>
                
                <section>
                    <h2>11. PowerShell Automation</h2>
                    <p><strong>Tool Overview:</strong> Embedding PowerShell allows powerful scripting capabilities, remote management, and structured data exchange (JSON, XML) within your application.</p>
                    <p><strong>Use Cases:</strong> Admin consoles, bulk configuration changes, integration with Azure/WSMan.</p>
                    <p><strong>Code Example:</strong></p>
                    <pre><code>using System.Management.Automation;

                using (var ps = PowerShell.Create()) {
                ps.AddScript("Get-Process | Where-Object { $_.CPU -gt 100 }");
                var results = ps.Invoke();
                }
                </code></pre>
                </section>
                
                <p>Equipped with these deep-dive insights, tool overviews, and code examples, you can architect Windows applications that fully harness the operating system’s capabilities.</p>
                </article>
                `
    },
    {
        id: 7,
        slug: 'back-end-knowledge',
        title: 'Back-end Knowledge',
        description: 'Python, NodeJs, road to C#',
        createdAt: new Date(),
        categories: [
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