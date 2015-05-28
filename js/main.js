document.addEventListener('DOMContentLoaded', function(){

  var areas = [
    {
      name: 'Technology',
      colors: ['#b5d5fd', '#83b9fc', '#529dfa', '#2081f9', '#065fd0'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'
      ]
    },
    {
      name: 'Client Management',
      colors: ['#71B9E9', '#3A9CDF', '#2582C4', '#1C6597', '#16527A'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'
      ]
    },
    {
      name: 'Collaboration',
      colors: ['#FCCDB6', '#F9AB86', '#F88A58', '#F6692F', '#DC511D'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'
      ]
    },
    {
      name: 'Personal Effectiveness',
      colors: ['#D6EAB8', '#B9DB85', '#A2CF5F', '#8BC041', '#78A538'],
      tooltext: [
        
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Managing self to meet deadlines and achieve results</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Taking ownership and responsibility for solving problems</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Identifying and analysing key issues ensuring full information is considered</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Listening well and asking good questions</li></div>' +
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Using logic and reason to influence others</li></div>' +
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Communicating clearly and concisely and with conviction in group and individual situations and in writing</li></div>' +
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Demonstrating a constructive and positive attitude</li></div>' +
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Selecting and using the appropriate business systems and IT resources to manage, monitor and review performance</li></div>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Managing self and others to meet deadlines and achieve results</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Recognising one solution may not solve the same issue every time</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Assessing and analysing risks associated with the problem and recommended solutions</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Making timely and workable decisions</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Persuading when advocating a position or expressing an opinion or conclusion</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Being articulate, concise and logical when speaking or writing</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Responding with speed and accuracy to others in person and/or with correspondence</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Using appropriate business and IT resources to monitor and review progress</li></div>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Delegating work as appropriate and monitoring the progress of the work delegated</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Identifying potential problem areas before they arise</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Identifying strategies to resolve problems</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Selecting appropriate communication techniques when challenging others decisions or actions</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Expressing point of view confidently and persuasively</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Articulating written arguments tailored to audience requirements</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Producing documents in client ready format</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Handling objections skilfully by acknowledging issues and suggesting alternatives</li></div>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Identifying and managing complex and often conflicting priorities to achieve results</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Identifying repeat problems through the analysis and interpretation of trends and patterns</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Acting to resolve the cause of problems</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Presenting complex concepts simply and logically</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Understanding and considering the negotating position of others</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Recognising the level of influence others have and adapting own style and strategies accordingly</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Speaking with confidence, focus, logically and persuasively</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Identifying range of methods to assess and analyse risks</li></div>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Encourages a culture of innovation and continuous improvement to support exceptional delivery</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Build relationships with colleagues across the business to ensure consistent client service</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Remains calm under pressure and demonstrates ability to manage conflict effectively</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Generates confidence and credibility through presence and impact</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Ensures they maintain good awareness of external market conditions and competitor intelligence</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Invests time in getting to know others at all levels in the firm and builds relationships</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Is always mindful of position as a role model for the firm\'s values and is committed to instilling them in staff</li></div>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""><div class="listitem">Understands the need to take all opportunities to create a positive working environment</li></div>'

      ]
    },
    {
      name: 'Finance Management',
      colors: ['#CCCCCC', '#B2B2B2', '#999999', '#6E6E6E', '#545454'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'
      ]
    },
    {
      name: 'Risk Management',
      colors: ['#DE9AC5', '#D570B1', '#CA4A9C', '#922C6E', '#5E1C47'],
      tooltext: [
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+

        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>',
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'+
        '<li><input class="tooltip-input" type="checkbox" name="" value=""> <div class="listitem">Lorem ipsum dolor sit amet, consectetur adipisicing</div> </li>'
      ]
    }
  ];

  var results = [];

  // for (var q = 0; q < areas.length; q++){
  //   results.push({
  //      name: areas[q].name,
  //      results: []
  //   });
  // }

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
    if(d3.select('.group--selected').empty()){
        d3.selectAll('path').style('opacity', '.2')
        d3.select(this).selectAll('path').style('opacity', '1')
        tooltip.style('background', d.colors[2])
        tooltip.style('box-shadow', '0 0 0 1px ' + d.colors[3])
    }
  }).on('mouseout', function(){
      d3.selectAll('path').style('opacity', '1')
  }).on('click', function(){
    //On click we add the selected class to the group, 
    //letting us figure out later if there's at least one selected in each group
    // this.classList.add('group--selected');
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
        for (var z=0; z < checkboxes.length; z++){
            resultsTemp.push({
                checked: checkboxes[z].checked,
                text: checkboxes[z].nextElementSibling.innerHTML
            });

        }

        results.push({
             name: boxTitle,
             results: resultsTemp
         });

        currentGroup.classed('group--disabled', true);
        currentGroup.classed('group--selected', false);
        document.querySelector('.tooltip').innerHTML = "<br/> Results saved! <br/><br /> Please select a new group";


    };
  })


  var listItems = document.querySelectorAll('.legend li');

  var legendHighlight = function(that){
    for(var c = 0; c < listItems.length; c++){
      listItems[c].style.opacity = 0.2;
    }
    listItems[d3.select(that).attr('class').replace("selected", "") - 1].style.opacity = 1;
  };


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
        if(d3.select('.group--selected').empty()){
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
        tooltip.html('<h3>' + d.name + ' / Band '+ currentClass +'</h3>' + '<hr />' + '<ul>' + d.tooltext[currentClass -1] + '</ul><button disabled class="tooltip-done">Done</button>');
        //We use the class to highlight the relevant number in the legend
        legendHighlight(this);

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

    ///New Attempt to pre-populate the tooltip
    // tooltip.html('<div class="'+ nameToClass(areas[a]) +'"><h3>' + areas[a].name + ' / Band '+ currentClass +'</h3>' + '<hr />' + '<ul>' + areas[a].tooltext + '</ul></div>');
  }

  //We add the 'Finish' button that will return the overlay after being dismissed
  d3.select('#chart').append('button').classed('button--hl', true).html('Finish').on('click', function(){
      d3.select('.form-overlay').classed('visible', true)
  });

  //Hides the modal popup
  var hideModal = function(){
    this.classList.remove('visible');
    document.querySelector('#chart button').style.display = 'block';
  };

  //Clicking the back of the modal overlay hides it
  document.querySelector('.form-overlay').onclick = hideModal;

  //The return button on the modal also hides it
  document.querySelector('.button-return').onclick = function(event){
    event.preventDefault();
    location.reload();
    // hideModal;
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
    var resultPDF = new jsPDF();
    resultPDF.text(20, 100, 'RESULTS');

    for(var counter = 0; counter < results.length; counter++){
        resultPDF.addPage();
        resultPDF.setFontSize(16);
        resultPDF.text(20, 20, results[counter].name);

        resultPDF.setFontSize(12);
        for(var counterTwo = 0; counterTwo < results[counter].results.length; counterTwo++){
            var resultValue = results[counter].results[counterTwo].checked;
            if (resultValue){
                resultValue = '[ Yes ]';
            } else {
                resultValue = '[ No ]';
            }
            resultPDF.text(20, 40+(20*(counterTwo +1)),  resultValue + " " + results[counter].results[counterTwo].text);
        }
    }
    resultPDF.save('Test.pdf');
  };




});


