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

  var nameToClass = function(d){return d.name.replace(/\s+/g, '-').toLowerCase()};

  var tooltip = d3.select('.explanation').append('div')
      .classed('tooltip', true)
      .html('Hover over a group');

  // var ratingPop = d3.select('body').append('div')
  //   .classed('rating-tooltip', true);

  var arc =  function(i){
    if (i === 1){
      return d3.svg.arc()
        .innerRadius(0)
        .outerRadius(100)
        .startAngle(0 * (Math.PI/180))
        .endAngle(72 * (Math.PI/180))

    } 
    // else if (i === 6) {
    //   return d3.svg.arc()
    //     .innerRadius(0)
    //     .outerRadius(500)
    //     .startAngle(0 * (Math.PI/180))
    //     .endAngle(72 * (Math.PI/180))
    // } 
    else {
      return d3.svg.arc()
        .innerRadius(i * 50)
        .outerRadius((i * 50)+50)
        .startAngle(0 * (Math.PI/180))
        .endAngle(72 * (Math.PI/180))

    }
  };

  var pathGroup = d3.select('#chart')
    .append('svg')
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 600 600")
    .append('g')

    .selectAll('path').data(areas)
      .enter().append('g')
      .attr('class', function(d){
        return nameToClass(d);
      })


  pathGroup.on('mouseover', function(d){
    // d3.select(this).attr('transform', 'translate(-100,-100)')
    d3.selectAll('path').style('opacity', '.5')
    d3.select(this).selectAll('path').style('opacity', '1')
    tooltip.style('background', d.colors[2])
    tooltip.html('<h3>' + d.name + '</h3>' + '<p>' + d.tooltext + '</p>');
  }).on('mouseout', function(){
    d3.selectAll('path').style('opacity', '1')
  }).on('click', function(){
    this.classList.add('group--selected');
  })


  var listItems = document.querySelectorAll('.legend li');
  for(var x = 1; x < 6; x ++){
    pathGroup.append('path')
      .classed(x, true)
      .attr('d', arc(x))
      .style('fill', function(d){
        return d.colors[x-1];
      })
      .attr('transform', function(d, i){
        return  'translate(300, 300) ' + 'rotate(' + (i * 72) + ') ';
      })
      .on('mouseover', function(d){
        for(var c = 0; c < listItems.length; c++){
          listItems[c].style.opacity = 0.3;
        }
        listItems[this.classList - 1].style.opacity = 1;
      })
      .on('mouseout', function(d){
        for(var c = 0; c < listItems.length; c++){
          listItems[c].style.opacity = 1;
        }
      })
      .on('click', function(d){
        var name = '.' + nameToClass(d) + ' .selected';
        pathGroup.selectAll(name).classed('selected', false)
        document.getElementsByName(nameToClass(d)+'__text')[this.classList -1 ].checked = true;
        d3.select(this).classed('selected', true);
      })

      .attr('opacity', 0)
      .transition()
      .delay(function(d, i){
        return i * 50;
      })
      .duration(100)
      .attr('opacity', 1)
  }


});


