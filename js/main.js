document.addEventListener('DOMContentLoaded', function(){

  var areas = [
    {
      name: 'Technology',
      colors: ['#b5d5fd', '#83b9fc', '#529dfa', '#2081f9', '#065fd0'],
      tooltext: [
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'
      ]
    },
    {
      name: 'Client Management',
      colors: ['#71B9E9', '#3A9CDF', '#2582C4', '#1C6597', '#16527A'],
      tooltext: [
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'
      ]
    },
    {
      name: 'Collaboration',
      colors: ['#FCCDB6', '#F9AB86', '#F88A58', '#F6692F', '#DC511D'],
      tooltext: [
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'
      ]
    },
    {
      name: 'Personal Effectiveness',
      colors: ['#D6EAB8', '#B9DB85', '#A2CF5F', '#8BC041', '#78A538'],
      tooltext: [
        
        '<li>Managing self to meet deadlines and achieve results</li>'+
        '<li>Taking ownership and responsibility for solving problems</li>'+
        '<li>Identifying and analysing key issues ensuring full information is considered</li>'+
        '<li>Listening well and asking good questions</li>' +
        '<li>Using logic and reason to influence others</li>' +
        '<li>Communicating clearly and concisely and with conviction in group and individual situations and in writing</li>' +
        '<li>Demonstrating a constructive and positive attitude</li>' +
        '<li>Selecting and using the appropriate business systems and IT resources to manage, monitor and review performance</li>',

        '<li>Managing self and others to meet deadlines and achieve results</li>'+
        '<li>Recognising one solution may not solve the same issue every time</li>'+
        '<li>Assessing and analysing risks associated with the problem and recommended solutions</li>'+
        '<li>Making timely and workable decisions</li>'+
        '<li>Persuading when advocating a position or expressing an opinion or conclusion</li>'+
        '<li>Being articulate, concise and logical when speaking or writing</li>'+
        '<li>Responding with speed and accuracy to others in person and/or with correspondence</li>'+
        '<li>Using appropriate business and IT resources to monitor and review progress</li>',

        '<li>Delegating work as appropriate and monitoring the progress of the work delegated</li>'+
        '<li>Identifying potential problem areas before they arise</li>'+
        '<li>Identifying strategies to resolve problems</li>'+
        '<li>Selecting appropriate communication techniques when challenging others decisions or actions</li>'+
        '<li>Expressing point of view confidently and persuasively</li>'+
        '<li>Articulating written arguments tailored to audience requirements</li>'+
        '<li>Producing documents in client ready format</li>'+
        '<li>Handling objections skilfully by acknowledging issues and suggesting alternatives</li>',

        '<li>Identifying and managing complex and often conflicting priorities to achieve results</li>'+
        '<li>Identifying repeat problems through the analysis and interpretation of trends and patterns</li>'+
        '<li>Acting to resolve the cause of problems</li>'+
        '<li>Presenting complex concepts simply and logically</li>'+
        '<li>Understanding and considering the negotating position of others</li>'+
        '<li>Recognising the level of influence others have and adapting own style and strategies accordingly</li>'+
        '<li>Speaking with confidence, focus, logically and persuasively</li>'+
        '<li>Identifying range of methods to assess and analyse risks</li>',

        '<li>Encourages a culture of innovation and continuous improvement to support exceptional delivery</li>'+
        '<li>Build relationships with colleagues across the business to ensure consistent client service</li>'+
        '<li>Remains calm under pressure and demonstrates ability to manage conflict effectively</li>'+
        '<li>Generates confidence and credibility through presence and impact</li>'+
        '<li>Ensures they maintain good awareness of external market conditions and competitor intelligence</li>'+
        '<li>Invests time in getting to know others at all levels in the firm and builds relationships</li>'+
        '<li>Is always mindful of position as a role model for the firm\'s values and is committed to instilling them in staff</li>'+
        '<li>Understands the need to take all opportunities to create a positive working environment</li>'

      ]
    },
    {
      name: 'Finance Management',
      colors: ['#CCCCCC', '#B2B2B2', '#999999', '#6E6E6E', '#545454'],
      tooltext: [
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'
      ]
    },
    {
      name: 'Risk Management',
      colors: ['#DE9AC5', '#D570B1', '#CA4A9C', '#922C6E', '#5E1C47'],
      tooltext: [
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+

        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>',
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'+
        '<li>Lorem ipsum dolor sit amet, consectetur adipisicing </li>'
      ]
    }
  ];

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
    d3.selectAll('path').style('opacity', '.2')
    d3.select(this).selectAll('path').style('opacity', '1')
    tooltip.style('background', d.colors[2])
    tooltip.style('box-shadow', '0 0 0 1px ' + d.colors[3])
    // tooltip.html('<h3>' + d.name + '</h3>' + '<hr />' + '<p>' + d.tooltext + '</p>');
  }).on('mouseout', function(){
      d3.selectAll('path').style('opacity', '1')
  }).on('click', function(){
    //On click we add the selected class to the grup, 
    //letting us figure out later if there's at least one selected in each group
    // this.classList.add('group--selected');
    d3.select(this).classed('group--selected', true);
  })

  var listItems = document.querySelectorAll('.legend li');

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
        //We filter the class to get the number of the segment we're hovering over
        //The regex is necessary to bypass the selected class and only get a numeric one
        var currentClass = d3.select(this).attr('class').replace(/[^0-9]/g, '');
        //We replace the tooltip text with the relevant list items from the array
        tooltip.html('<h3>' + d.name + '</h3>' + '<hr />' + '<ul>' + d.tooltext[currentClass -1] + '</ul>');
        //We use the class to highlight the relevant number in the legend
        for(var c = 0; c < listItems.length; c++){
          listItems[c].style.opacity = 0.2;
        }
        listItems[d3.select(this).attr('class').replace("selected", "") - 1].style.opacity = 1;
      })
      .on('mouseout', function(d){
        for(var c = 0; c < listItems.length; c++){
          listItems[c].style.opacity = 1;
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
    hideModal;
  };

  var hasAppeared;
  document.querySelector('#chart').onclick = function(){
    //When all segements are filled out we display the modal,
    //but only do so once. Subsequent changes will not reactivate it.
    //Instead it can be re-activated with the 'Finish' button
    if (document.querySelectorAll('.group--selected').length === areas.length && hasAppeared !== true){
      //We set a variable so we can tell if this is the first time it has appeared
      hasAppeared = true;
      d3.select('.form-overlay').classed('visible', true)
    }
  };

});


