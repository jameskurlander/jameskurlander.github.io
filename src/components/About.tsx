export const About = () => (
  <div className='flex flex-col gap-10'>
    <div className='flex flex-col gap-2'>
      <h3>EDUCATION</h3>
      <div className='flex'>
        <span>The State University of New York at New Paltz</span>
        <span className='float-end'>New Paltz, NY</span>
      </div>
      <div className='flex'>
        <span>Bachelor of Science in Computer Engineering</span>
        <span>August 2016 – May 2020</span>
      </div>
      <span>• GPA: 3.20 / 4.00</span>
      <span>• Dean’s List: Spring 2019 – Spring 2020</span>
    </div>
    <div>
      <h3>EXPERIENCE</h3>
      <span>Fortune</span>
      <span>New York, NY</span>
      <span>Senior Software Engineer</span>
      <span>March 2024 – Present</span>
      <ul>
        <li>
          • Lead a frontend re-platforming effort to improve general site performance and reliability, as well as handle technical debt accumulated in an aging codebase using TypeScript, Next.js, React, GraphQL and Tailwind
        </li>
        <li>
          • Launched a backend product database and internal dashboard for editors to store and update financial product information collected from multiple sources using PHP, Laravel, and MySQL
        </li>
        <li>

          • Built an AI product recommendation chatbot powered by Fortune’s article data using a RAG pipeline setup along with TypeScript, React, LlamaIndex, and Supabase
        </li>
        <li>
          • Founded and hosted a weekly engineering book club to improve developer team culture and collaboration
        </li>
      </ul>
      <span>ELLKAY</span>
      <span>Elmwood Park, NJ</span>
      <span>Software Engineer</span>
      <span>April 2023 – February 2024</span>
      <ul>
        <li>
          • Built a prototype of our core web app using a modern stack including TypeScript, React, and GraphQL
        </li>
        <li>
          • Integrated React Web Components into an aging ASP.NET MVC web app using Preact and Webpack
        </li>
      </ul>
      <span>Junior Software Engineer</span>
      <span>August 2021 – April 2023</span>
      <ul>
        <li>
          • Refactored legacy C# code using asynchronous techniques, improving service performance at scale
        </li>
        <li>
          • Established data preservation for account configuration history using temporal tables in SQL Server
        </li>
      </ul>
      <span>Oceanside Mortgage Company</span>
      <span>Toms River, NJ</span>
      <span>Software Engineer</span>
      <span>February 2021 – July 2021</span>
      <ul>
        <li>
          • Created a Twilio-backed SMS chatbot in .NET Core to seamlessly connect potential borrowers to staff
        </li>
        <li>
          • Optimized developer efficiency by establishing version control on GitHub for the company’s various projects
        </li>
      </ul>
      <span>Sono-Tek</span>
      <span>Milton, NY</span>
      <span>Software Engineer (Intern)</span>
      <span>May 2020 – October 2020</span>
      <ul>
        <li>
          • Given a $70,000 budget, collaborated with student engineers to design and build a new product QA system
        </li>
        <li>
          • Independently took a .NET Framework control system app through the full software development life cycle
        </li>
        <li>
          • Automated technician workflow by storing and reusing product-specific test settings upon initial entry
        </li>
        <li>
          • Embedded Sono-Tek’s existing test scheduler in the app, ensuring consistent transfer of tracking numbers
        </li>
      </ul>
    </div>
    <div>
      <h3>SKILLS</h3>
      <h4>Languages:</h4>
      <ul className='flex flex-row'>
        <li>• TypeScript</li>
        <li>• C#</li>
        <li>• PHP</li>
        <li>• HTML</li>
        <li>• CSS</li>
        <li>• SQL</li>
        <li>• C++</li>
      </ul>
      <h4>Technologies:</h4>
      <ul className='flex flex-row'>
        <li>• Next.js</li>
        <li>• React</li>
        <li>• GraphQL</li>
        <li>• Tailwind</li>
        <li>• Laravel</li>
        <li>• .NET</li>
        <li>• Microsoft SQL Server</li>
        <li>• MySQL</li>
        <li>• Docker</li>
      </ul>
    </div>
  </div>
);
