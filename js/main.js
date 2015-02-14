document.addEventListener('DOMContentLoaded', function(){

  var areas = [
    {
      name: 'Risk Management',
      color: 'purple',
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Client Management',
      color: 'blue',
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Collaboration',
      color: 'orange',
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Personal Effectiveness',
      color: 'green',
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Finance Management',
      color: 'grey',
      tooltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  ];

  var tooltip = d3.select('body').append('div')
      .classed('tooltip', true)
      .html('Hover over a group');

  var arc =  function(i){
    return d3.svg.arc()
      .innerRadius(i * 50)
      .outerRadius(i * 60)
      .startAngle(0 * (Math.PI/180))
      .endAngle(72 * (Math.PI/180));
  };

  var pathGroup = d3.select('#chart')
    .style('width', 800)
    .style('height', 800)
    .append('svg')
    .append('g')
    .selectAll('path').data(areas)
      .enter().append('g');

  pathGroup.on('mouseover', function(d){
    tooltip.style('background', d.color)
    tooltip.html('<h3>' + d.name + '</h3>' + d.tooltext);
  })

  for(var x = 1; x < 6; x ++){
    pathGroup.append('path')
      .attr('d', arc(x))
      .style('fill', function(d){
        return d.color;
      })
      .attr('transform', function(d, i){
        return  'translate(300, 150) ' + 'rotate(' + (i * 72) + ')';
      })
  }
});
