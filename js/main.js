document.addEventListener('DOMContentLoaded', function(){

  var areas = [
    {
      name: 'Risk Management',
      color: 'purple',
      colors: ['#DE9AC5', '#D570B1', '#CA4A9C', '#922C6E', '#5E1C47'],
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Client Management',
      color: 'blue',
      colors: ['#71B9E9', '#3A9CDF', '#2582C4', '#1C6597', '#16527A'],
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Collaboration',
      colors: ['#FCCDB6', '#F9AB86', '#F88A58', '#F6692F', '#DC511D'],
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Personal Effectiveness',
      color: 'green',
      colors: ['#D6EAB8', '#B9DB85', '#A2CF5F', '#8BC041', '#78A538'],
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Finance Management',
      colors: ['#CCCCCC', '#B2B2B2', '#999999', '#6E6E6E', '#545454'],
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  ];

  //Makes a class-friendly name out of the area titles
  var nameToClass = function(d){return d.name.replace(/\s+/g, '-').toLowerCase()};

  var tooltip = d3.select('.explanation').append('div')
      .classed('tooltip', true)
      .html('Hover over a group');

  //Build the Arc shape
  var arc =  function(i){
    if (i === 1){
      //If it's the first iteration make it pie-shaped
      return d3.svg.arc()
        .innerRadius(0)
        .outerRadius(100)
        .startAngle(0 * (Math.PI/180))
        .endAngle(72 * (Math.PI/180))

    } else {
      //We pass in the iterator later and then multiply the Radius
      //by it to create concentric circles
      return d3.svg.arc()
        .innerRadius(i * 50)
        .outerRadius((i * 50)+50)
        .startAngle(0 * (Math.PI/180))
        .endAngle(72 * (Math.PI/180))
    }
  };

  //We create the chart
  var pathGroup = d3.select('#chart')
    .append('svg')
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 600 600")
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
    tooltip.html('<h3>' + d.name + '</h3>' + '<hr />' + '<p>' + d.tooltext + '</p>');
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
        //We position it by rotating it 72 degrees each time through
        return  'translate(300, 300) ' + 'rotate(' + (i * 72) + ') ';
      })
      .on('mouseover', function(d){
        //We use the class to highlight the relevant number in the legend
        for(var c = 0; c < listItems.length; c++){
          listItems[c].style.opacity = 0.2;
        }
        listItems[d3.select(this).attr('class') - 1].style.opacity = 1;
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

  var formOverlay = document.querySelector('.form-overlay');

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
  formOverlay.onclick = hideModal;

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


