// What is HTTP?
// Hyper Text Transfer is Protocol how data are being  trasferred to and from the computer to a server in a standard .

// What is a URL?
// This means Uniform Resource Locator, 
// it a uniform identifier to tell a user how where to locate a resource
// made of proocol,domain and path 

// What is DNS?
// its a naming database that locates and translate internet domain
// names into IP address, domain name can have many IP address

// What is a query string?
// they are part of a URL that starts from the ?, this is a parameter that's being pass on to the internet 
// it allows you pass key-value pairs to URL 

// What are two HTTP verbs and how are they different?
// GET - get some data from the server (most pages, search forms)
// POST - send some data to the server (pages that change data on server

// What is an HTTP request?
// An HTTP request is a request from a client to a server which follows the HTTP protocol
//  (eg a request for HTML from news.google.com)

// What is an HTTP response? 
// An HTTP response is a response from a server to a client which follows the HTTP protocol 
// (eg sending back HTML/CSS/JS/etc)

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
// Headers provide additional information about the request or the response. Here are some examples:
// Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
// Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control
// What happens when you type a URL in a browser?

// Your browser “resolves” the name into an IP address using DNS
// Your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)
// The server sends a response (typically, HTML, with a status code (200 if it was sucessful)
// The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
// The browser makes separate HTTP requests for those resources and receives response from the server for each