document.addEventListener('DOMContentLoaded', function(){

  var areas = [
    {
      name: 'Technical',
      colors: ['#b5d5fd', '#83b9fc', '#529dfa', '#2081f9', '#065fd0'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Undertake more detailed research for senior colleagues to support client requests and projects.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Collect information from relevant research sources.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Able to identify and analyse facts and issues.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Able to draft and prepare letters and simple documents, typically based on established precedents.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">General checking of client and internal documentation for completeness.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Regularly discuss topics relevant to the team and issues with colleagues and supervisor to develop understanding.</div> </li>'+
        '<p><em>For more specific role accountabilities please refer to your individual job description</em></p>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I know how to locate and use complex documents and precedents.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I assist with the creation of precedents.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I keep aware and abreast of relevant issues through reading newsletters and attending seminars.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I undertake research and produce clear, accurate findings tailored to specific issues.</div> </li>'+
        '<p><em>For more specific role accountabilities please refer to your individual job description</em></p>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I stay aware of current matters affecting own team and specialism.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I demonstrate a good knowledge / understanding of my own team and a working knowledge of other practices.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I demonstrate a more detailed knowledge of own specialist area and start to be identified as a specialist in area(s) of specialisation.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to apply precedents to specific situations / requests, develop creative solutions to areas of interest.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to select appropriate precedents for use in communications.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to draft and amend reasonably complex documents seeking input from senior colleagues on more technical matters.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have excellent legal and business research skills.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I regularly contribute to the development of know-how materials.</div> </li>'+
        '<p><em>For more specific role accountabilities please refer to your individual job description</em></p>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I keep my technical expertise up to date through attendance at appropriate seminars and conferences.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to recognise issues that require research, allocating resources and directing as required.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I recognise where changes in law or practice may require amendments to precedents.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I demonstrate a comprehensive working knowledge of my specialist area and am a recognised expert in my own field.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I possess a developed knowledge of other practice areas.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to draft complex documentation, possibly without precedent, identifying and analysing all legal and commercial issues.</div> </li>'+
        '<p><em>For more specific role accountabilities please refer to your individual job description</em></p>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am valued as a trusted business advisor.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I use and manage resources to research issues relevant to the team</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I share knowledge at all levels internally and possibly externally through delivery at seminars.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to draft and communicate on most complex issues.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I possess a good knowledge of the wider business</div> </li>'+
        '<p><em>For more specific role accountabilities please refer to your individual job description</em></p>'
      ]
    },
    {
      name: 'Client Relationships',
      colors: ['#71B9E9', '#3A9CDF', '#2582C4', '#1C6597', '#16527A'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I demonstrate and promote our firm values</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I aim to exceed expectations and take pride in the work I deliver</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I respond positively to feedback</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I develop strong relationships at an appropriate level</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I utilise the brand toolkits available and seek the assistance of the marketing team</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am aware of, and uphold, the firm\'s client service values</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am reliable and accountable for my own work</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I interact with colleagues and share knowledge to deliver the best possible service/experience to clients and colleagues</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I apply what is learnt from formal and informal feedback on how I work</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am aware of the issues impacting on the firm and the legal industry</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I represent the firm in line with its values at all internal and external meetings</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I seek to create connections across the firm, broadening my knowledge of our practices and teams</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I actively take part in our value campaigns to support their impact</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I look for new, improved ways of working in my team</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I understand the firm\'s commercial and strategic objectives</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I generate ideas on how the firm can offer an even better experience to it\'s clients</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I think about opportunities available to clients as a result of legal and market developments</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I uphold firm values both personally and as a champion within my team</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I provide team direction in the context of the firm\'s overall strategy and/or specific objectives</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I maintain inter team relationships even when not currently working together</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I build relationships with managers outside of my team/function</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I analyse and interpret trends and patterns in my professional support industry for the firm</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I ensure firm brand and client service values are consistently upheld across the team</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I anticipate firm needs and act upon the knowledge to benefit the firm</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I establish how firm service values should be applied and upheld in their team, and take responsibility for maintaining standards</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am considered internally and/or externally as a lead on strategically important projects </div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I broaden existing relationships and facilitate the development of relationships between my team and the firm </div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have a complete understanding of the firm\'s business at a strategic level, providing value-added commercial advice to the business</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I actively participate (speaking and hosting) in events and interact with industry bodies to represent the firm and its values.</div> </li>'
      ]
    },
    {
      name: 'Team Work',
      colors: ['#FCCDB6', '#F9AB86', '#F88A58', '#F6692F', '#DC511D'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I seek out and build a network for development, coaching and career advice</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I actively support and contribute to team activities, building effective relationships within the team</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am developing own knowledge and skills</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I take advantage of development opportunities</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I seek and make use of constructive feedback from colleagues</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I work to meet the firm\'s values and expections especially around diversity and inclusion and respect for others</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I take responsibility for my own actions</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I work effectively as a team member and help build relationships within the team</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I learn from myself, and others experiences, to improve skills and knowledge</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am self critical and drive my own development needs effectively and react positively to feedback</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I actively help and support others to achieve team goals</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am approachable and show sensitivity to the needs of others</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I escalate responsibility for tasks or decisions appropriately</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I monitor my own progress against objectives and take appropriate action to ensure delivery of results</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I contribute to team objectives, regardless of direct personal benefit</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I develop and encourage others through support, feedback, guidance and constructive feedback</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I set high standards for performance and behaviour and act as a role model</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I share information and keep the team fully informed of internal and external developments</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I effectively manage and build relationships</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I participate in delivery of training</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I set high standards for performance and behaviour</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I direct people and tasks with authority, credibility and presence</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I delegate tasks and activities as a means of developing others</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I motivate the performance of others through recognition and praise</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I run effective team meetings and particpate effectively in team meetings</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I actively particiapte in the firm, encouraging collaboration among team members</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I manage team members and resources efficiently </div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I coordinate the contribution of others</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I support my team to win and deliver the highest quality work</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I positively influence and adapt my style to gain commitment and trust of others</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I provide opportunities, challenges and support to enable individual\'s to develop.  I coach and mentor others</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I provide timely and constructive informal feedback on performance</div> </li>'
      ]
    },
    {
      name: 'Personal Effectiveness',
      colors: ['#D6EAB8', '#B9DB85', '#A2CF5F', '#8BC041', '#78A538'],
      tooltext: [
        
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I manage myself to meet deadlines and achieve results</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I take ownership and responsibility for solving problems</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I identify and analyse key issues ensuring full information is considered</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I listen well and ask good questions</div>' +
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I use logic and reason to influence others</div>' +
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I communicate clearly and concisely and with conviction in group and individual situations and in writing</div>' +
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I demonstrate a constructive and positive attitude</div>' +
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I select and use the appropriate business systems and IT resources to manage, monitor and review performance</div>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I manage myself and others to meet deadlines and achieve results</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I recognise one solution may not solve the same issue every time</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I assess and analyse risks associated with the problem and recommend solutions</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I make timely and workable decisions</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I persuade when advocating a position or expressing an opinion or conclusion</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I am articulate, concise and logical when speaking or writing</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I respond with speed and accuracy to others in person and/or with correspondence</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I use appropriate business and IT resources to monitor and review progress</div>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I delegate work as appropriate and monitor the progress of the work delegated</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I identify potential problem areas before they arise</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I identify strategies to resolve problems</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I select appropriate communication techniques when challenging the decisions or actions of others</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I express my point of view confidently and persuasively</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I articulate written arguments tailored to audience requirements</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I produce documents in client ready format</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I handle objections skilfully by acknowledging issues and suggesting alternatives</div>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I identify and manage complex and often conflicting priorities to achieve results</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I identify repeat problems through the analysis and interpretation of trends and patterns</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I act to resolve the cause of problems</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I present complex concepts simply and logically</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I understand and consider the negotating position of others</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I recognise the level of influence others have and adapt own style and strategies accordingly</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I speak with confidence, focus, and am logical and persuasive</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I identify a range of methods to assess and analyse risks</div>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I encourage a culture of innovation and continuous improvement to support exceptional delivery</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I build relationships with colleagues across the business to ensure consistent client service</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I remain calm under pressure and demonstrate ability to manage conflict effectively</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I generate confidence and credibility through presence and impact</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I ensure I maintain good awareness of external market conditions and competitor intelligence</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I invest time in getting to know others at all levels in the firm and build relationships</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I am always mindful of my position as a role model for the firm\'s values and am committed to instilling them in staff</div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">I understand the need to take all opportunities to create a positive working environment</div>'

      ]
    },
    {
      name: 'Finance',
      colors: ['#CCCCCC', '#B2B2B2', '#999999', '#6E6E6E', '#545454'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I efficiently, consistently and in a timely manner, manage personal time recording</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I manage other relevant performance indicators as required by the firm such as recovery rates or billings</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I adopt appropriate processes to manage matters, cases and projects to time, to agreed standards and within budget</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I manage simple matters, cases and projects to time, to agreed standards and within budget</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I understanding how my role and contribution fits into the bigger picture</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I work to achieve own targets and know how these contribute to the firm\'s profitability</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I focus on financial implications and targets of the team or practice group</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I assist in budgeting when appropriate</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I understand the business plan and my role in the team in achieving it</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I keep debts under review and ensure regular and early communication with clients and supervising partner on any debts not paid within the firm\'s standard period</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I demonstrate expertise in seeing issues in financial terms</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I manage and supervise work within time and cost constraints</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I communicate information including cost and time deviations to partners and to clients as appropriate</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I consider budget implications when delegating work</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I drive a culture that encourages cost consciousness and profitable contribution from all</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I monitor financial information against budget and business plans</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I manage lock up and recovery effectively</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I balance costs and benefits in the interests of the client and firm</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I manage billing and collection of fees whilst maintaining good client relationships</div> </li>'
      ]
    },
    {
      name: 'Risk Management',
      colors: ['#DE9AC5', '#D570B1', '#CA4A9C', '#922C6E', '#5E1C47'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I adhere to basic principles of the SRA Handbook and the firm\'s policies and procedures.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I represent the firm in professional manner at all times.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I keep details of our clients, their matters and former clients and their matters confidential.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I keep details about the firm\'s business confidential.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I report any concerns regarding breach of confidentiality to my line manager.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I ensure matter files and client deeds, records and documents are safely stored and recorded on the right Thomas Eggar system.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I comply with anti money laundering and anti bribery legislation.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I report compliance failures to the Risk Team in a timely manner.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I seek supervision and support from more experienced members of the team prior to giving client\'s advice.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I understand and take part in the file review processes in the firm.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I complete all compliance training as required.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I file of all emails on client related matters within correct part of our electronic filing system</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have an awareness of the firm\'s environmental objectives and encourage adherence by supporting initiatives on recycling and saving of power.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have an awareness of cyber security risk and know not to reply to unexpected emails, click on links in emails from unusual source or introduce any memory stick, CD or other item onto the firm\'s system </div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have an awareness of health and safety at work and maintain a tidy work space to prevent accidents at work.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I treat everyone I come into contact with, with respect.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I report to the Risk Team any actual / potential claims or formal complaints without delay.</div></li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I support the firm in the maintenance of the various accreditations it holds e.g. Lexcel, IIP, ISO14001, CQS etc.</div></li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I ensure work is completed in a timely manner, within pre-agreed timescales. </div></li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have knowledge of the SRA Handbook including full compliance with the Handbook and the firm\'s policies and procedures for the work undertaken by me as an individual.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am aware of client confidentiality within the team and ensuring compliance and complying with the firm\'s security procedures relating to the retention, sharing and destruction of documents</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I ask for guidance when uncertain of a procedure and am aware of the limits of one\'s authority.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I act in a professional manner at all times</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I undertake client conflict checks using the firm\'s systems and raise concerns if a potential conflict exists.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I raise areas of concern regarding risk and compliance issues arising on my own matters with supervisors in the team.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I ensure all contact with clients is effectively documented on the matter or client file.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I ensure consistency of service delivery to all clients ensuring no discrimination.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to effectively scope work to be undertaken for a client and document that in writing for the client.</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have knowledge of the SRA Handbook including full compliance with the firm\'s policies and procedures and am able to apply these items to the work of the team as a whole.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have an awareness of conflicts of interest and how these affect the practice and ensure new instructions or new elements of work on existing instructions are checked for conflict.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to effectively supervise others in the team on routine work undertaken by others.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I support effective knowledge management within the team for client, legal, sector and process knowledge.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I support the Risk Team in the review of matters linked to complaints or claims against the firm.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I ensure clients are engaged in the firm\'s matter feedback programme at the conclusion of their matters.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I encourage the office to maintain high level of compliance with Health & Safety requirements including tidy work areas across the office.</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I organise training of others undertaking the same level of work on changes in the law that affect the work type to ensure self and others in the team are up-to-date.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I identify areas within the team which may require improved process or changes to deliver a more effective service to a client, enhanced risk management or improved efficiency in the delivery of work.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I generate ideas about how the team can engage with the firm\'s environmental objectives in connection with recycling and power saving.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to effectively supervise others across the Practice Group in the delivery of high quality work for clients.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I support effective knowledge management within the Practice Group for client, legal, sector and process knowledge.</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I have knowledge of the SRA Handbook including full compliance with the firm\'s policies and procedures and able to apply these items to the Practice Group.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to look at risk from a strategic perspective and raise items with the Risk Team for inclusion in the risk register or for improvement in compliance related activities.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I am able to effectively project manage complex legal work across the firm with representatives from various Practice Groups.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I Identify risk issues within the Practice Group and am able to put forward and implement suggestions for change to improve compliance.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I undertake post transaction / post matter reviews and ensure lessons learnt are shared across the firm including the Risk Team for the benefit of the firm.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I support effective knowledge management within the firm for client, legal, sector and process knowledge.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I ensure that risk and compliance is taken into account when setting the business plan for the firm.</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">I lead by example in terms of compliance across the firm and sets high level of expectations from others, education others in the firm of the importance of effective risk management.</div> </li>',
      ]
    }
  ];

  //Where the results are stored to pass onto jsPDF
  var results = [];

  //Highlights the relevant number in the legend
  var listItems = document.querySelectorAll('.legend li');
  var legendHighlight = function(that){
    for(var c = 0; c < listItems.length; c++){
      listItems[c].style.opacity = 0.3;
    }
    listItems[d3.select(that).attr('class').replace("selected", "") - 1].style.opacity = 1;
  };

  //Makes a class-friendly name out of the area titles
  var nameToClass = function(d){return d.name.replace(/\s+/g, '-').toLowerCase()};

  var tooltip = d3.select('.explanation').append('div')
      .classed('tooltip', true)
      .html('Hover over a segment to see a description.');

  //Build the Arc shape
  var arc =  function(i){
    if (i === 1){
      //If it's the first iteration make it pie-shaped
      return d3.svg.arc()
        .innerRadius(0)
        .outerRadius(100)
        .startAngle(0 * (Math.PI/180))
        .endAngle((360/areas.length) * (Math.PI/180))

    } else {
      //We pass in the iterator later and then multiply the Radius
      //by it to create concentric circles
      return d3.svg.arc()
        .innerRadius(i * 50)
        .outerRadius((i * 50)+50)
        .startAngle(0 * (Math.PI/180))
        .endAngle((360/areas.length) * (Math.PI/180))
    }
  };

  //We create the chart
  var pathGroup = d3.select('#chart')
    .append('svg')
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 600 600")
    //For IE, temp fix
    .attr("width", 550)
    .attr("height", 550)
    .append('g')

    .selectAll('path').data(areas)
      //We create a group for each set of related paths (or area)
      .enter().append('g')
      .attr('class', function(d){
        return nameToClass(d);
      })

  //Hovering over a group changes the tooltip's color and content
  pathGroup.on('mouseover', function(d){
    var that = this;
    if(d3.select('.group--selected').empty() &&  d3.select(that).classed('group--disabled') == false){
        d3.selectAll('path').style('opacity', '.3')
        d3.select(this).selectAll('path').style('opacity', '1')
        tooltip.style('background', d.colors[2])
        tooltip.style('box-shadow', '0 0 0 1px ' + d.colors[3])
    }
  }).on('mouseout', function(){
      d3.selectAll('path').style('opacity', '1')
  }).on('click', function(){

    if (d3.select(this).classed('group--disabled') == false){
      //On click we add the selected class to the group, 
      //letting us figure out later if there's at least one selected in each group
      d3.select('.group--selected').classed('group--selected', false);
      d3.select(this).classed('group--selected', true);

      var currentGroup = d3.select(this);
      var allInputs = document.querySelectorAll('.tooltip-input');

      for(var os = 0; os < allInputs.length; os ++) {
        allInputs[os].onchange = function(){
          if (document.querySelector('.tooltip-input:checked')) {
            document.querySelector('.tooltip-done').classList.add('tooltip-done--active');
            document.querySelector('.tooltip-done').disabled = false;
          } 
        };
      }

      //Hander for the Done Button
      document.querySelector('.tooltip-done').onclick = function(){
        var checkboxes = document.querySelectorAll('.tooltip-input');
        var boxTitle = document.querySelector('.tooltip h3').innerHTML;
        var resultsTemp = [];

        //Create a temporary array where we store the results of the checkboxes
        for (var z=0; z < checkboxes.length; z++){
          resultsTemp.push({
            checked: checkboxes[z].checked,
            text: checkboxes[z].nextElementSibling.innerHTML
          });
        }

        //Create a new entry in the Results array with the title and checkbox results
        results.push({
          name: boxTitle,
          results: resultsTemp
        });

        //Once we're done, grey out the segment and re-enable the hover effect
        currentGroup.classed('group--disabled', true);
        currentGroup.classed('group--selected', false);

        document.querySelector('.tooltip').innerHTML = "<br/> Results saved! <br/><br /> Please select a new group";
      };
    }


  })

  //Now we create each ring of the chart by looping over 5 times
  for(var x = 1; x < 6; x ++){
    //Path Group contains the currently selected path in a group
    pathGroup.append('path')
      //We add the iterator as a class, which will also serve
      //to identify the numeric value of the ring when we map it
      //to an input
      .classed(x, true)
      .attr('d', arc(x))
      .style('fill', function(d){
        return d.colors[x-1];
      })
      .attr('transform', function(d, i){
        //We position it by rotating it each time through
        return  'translate(300, 300) ' + 'rotate(' + (i * (360/areas.length)) + ') ';
      })
      .on('mouseover', function(d){
        var parentGroup = this.parentNode;
        if(d3.select('.group--selected').empty() && d3.select(parentGroup).classed('group--disabled') == false){
            //We filter the class to get the number of the segment we're hovering over
            //The regex is necessary to bypass the selected class and only get a numeric one
            var currentClass = d3.select(this).attr('class').replace(/[^0-9]/g, '');
            //We replace the tooltip text with the relevant list items from the array
            tooltip.html('<h3>' + d.name + ' / Band '+ currentClass +'</h3>' + '<hr />' + '<ul>' + d.tooltext[currentClass -1] + '</ul>');
            //We use the class to highlight the relevant number in the legend
            legendHighlight(this);
        }
      })
      .on('mouseout', function(d){
        if(d3.select('.group--selected').empty()){
            for(var c = 0; c < listItems.length; c++){
              listItems[c].style.opacity = 1;
            }
        }
      })
      .on('click', function(d){
        if ( d3.select(this.parentNode).classed('group--disabled') == false){

        var name = '.' + nameToClass(d) + ' .selected';
        //We brute force it and remove all selected items from the group
        pathGroup.selectAll(name).classed('selected', false)
        //We check the related ratio button in the hidden form
        document.getElementsByName(nameToClass(d)+'__text')[d3.select(this).attr('class') -1 ].checked = true;
        //We add the result to the overlay table
        d3.select('.' + nameToClass(d)+'__dd').html(d3.select(this).attr('class') + '/5');
        //We re-add the class to the clicked segement
        d3.select(this).classed('selected', true);

        d3.select(this).selectAll('path').style('opacity', '1')
        tooltip.style('background', d.colors[2])
        tooltip.style('box-shadow', '0 0 0 1px ' + d.colors[3])

        //We filter the class to get the number of the segment we're hovering over
        //The regex is necessary to bypass the selected class and only get a numeric one
        var currentClass = d3.select(this).attr('class').replace(/[^0-9]/g, '');
        //We replace the tooltip text with the relevant list items from the array
        tooltip.html('<h3>' + d.name + ' / Band '+ currentClass +'</h3>' + '<hr />' + '<p><em>Tick at least one box then click \'Done\'.</em></p><ul>' + d.tooltext[currentClass -1] + '</ul><button disabled class="tooltip-done">Done</button>');
        //We use the class to highlight the relevant number in the legend
        legendHighlight(this);

        }

      })

      //Effects for fading in each group on load
      .attr('opacity', 0)
      .transition()
      .delay(function(d, i){
        //We delay the effect based on the group, fading them in sequentially
        return i * 50;
      })
      .duration(100)
      .attr('opacity', 1)
  }

  //Now we generate the results form for the modal, and the invisible form that we'll submit
  var modalDL = d3.select('.form-overlay .form-overlay__modal dl');

  for (var a = 0; a < areas.length; a++){
    //We build up the dl list automatically
    modalDL.append('dt').html(areas[a].name);
    modalDL.append('dd').classed(nameToClass(areas[a]) + '__dd', true);

    //We build up the input list automatically
    d3.select('.form-overlay__inputs')
      .append('label')
      .html(areas[a].name)
      .attr('for', nameToClass(areas[a]) + '-input');

    //For each section we build up 5 inputs with the rating values
    for (var b = 1; b < 6; b++){
      var input = d3.select('.form-overlay__inputs')
        .append('input')
        .attr('type', 'radio')
        .attr('name', nameToClass(areas[a]) + "__text")
        .attr('value', b)

        //If it's the first input we also give it an ID
        if (b === 1){
          input.attr('id', nameToClass(areas[a]) + '-input')
        }
    }
  }

  //We add the 'Finish' button that will return the overlay after being dismissed
  d3.select('#chart').append('button').classed('button--hl', true).html('Finish').on('click', function(){
      d3.select('.form-overlay').classed('visible', true)
  });

  //The return button on the modal also hides it
  document.querySelector('.button-return').onclick = function(event){
    event.preventDefault();
    location.reload();
  };

  var hasAppeared;
  document.querySelector('.tooltip').onclick = function(){
    //When all segements are filled out we display the modal,
    //but only do so once. Subsequent changes will not reactivate it.
    //Instead it can be re-activated with the 'Finish' button
    if (results.length === areas.length && hasAppeared !== true){
      //We set a variable so we can tell if this is the first time it has appeared
      hasAppeared = true;
      d3.select('.form-overlay').classed('visible', true)
    }
  };

  // Final Submission Submit Handler
  document.querySelector('.button--submit').onclick = function(event){
    event.preventDefault();
    var docDefinition = {
      content: [
      { 
        text: 'Development Wheel Results\n\n', 
        style: 'header' 
      } ],
    };

    for(var counter = 0; counter < results.length; counter++){
        docDefinition.content.push({
          text: results[counter].name + "\n\n", 
          style:'subheader'
        });

        var ul = [];
        for(var counterTwo = 0; counterTwo < results[counter].results.length; counterTwo++){
            var resultValue = results[counter].results[counterTwo].checked;
            var copy = results[counter].results[counterTwo].text;

            if (resultValue){
                resultValue = '(Yes)';
            } else {
                resultValue = '(No)';
            }

           ul.push(resultValue + " " + copy);
        }

        docDefinition.content.push({ul: ul}, "\n\n");
    }

    docDefinition.styles = {
      header: {
        fontSize: 18,
        bold: true
      },     
      subheader: {
        fontSize: 14,
        bold: true
      },
      yes: {
        fontSize: 14,
        bold: true,
        color: 'red'
      }
    };

    pdfMake.createPdf(docDefinition).download();
  };

});


