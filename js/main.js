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

  var nameToClass = function(d){return d.name.replace(/\s+/g, '-').toLowerCase()};

  var tooltip = d3.select('.container').append('div')
      .classed('tooltip', true)
      .html('Hover over a group');

  // var ratingPop = d3.select('body').append('div')
  //   .classed('rating-tooltip', true);

  var arc =  function(i){
    if (i === 1){
      return d3.svg.arc()
        .innerRadius(0)
        .outerRadius(60)
        .startAngle(0 * (Math.PI/180))
        .endAngle(72 * (Math.PI/180))

    } else {

      return d3.svg.arc()
        .innerRadius(1 * 50)
        .outerRadius(1 * 60)
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
    tooltip.style('background', d.color)
    tooltip.html('<h3>' + d.name + '</h3>' + d.tooltext);
  })

  for(var x = 1; x < 6; x ++){
    pathGroup.append('path')
      .classed(x, true)
      .attr('d', arc(x))
      .style('fill', function(d){
        return d.color;
      })
      .attr('transform', function(d, i){
        return  'translate(300, 300) ' + 'rotate(' + (i * 72) + ') ' + 'scale('+x+', '+ x +')';
      })
      .on('mouseover', function(d){
        // ratingPop.html(this.classList)
        //   .style('left', (d3.event.pageX - 100) + 'px')
        //   .style('top',  (d3.event.pageY - 100) + 'px')
        //   .style('display', 'block')
      })
      .on('mouseout', function(d){
        // ratingPop.style('display', 'none')
      })
      .on('click', function(d){
        var name = '.' + nameToClass(d) + ' .selected';
        // console.log(document.getElementsByName(nameToClass(d)+'__text'));
        pathGroup.selectAll(name).classed('selected', false)

        // if(this.classList.contains('selected') === true){
        //   this.classList.remove('selected');
        // } else {
          document.getElementsByName(nameToClass(d)+'__text')[this.classList -1 ].checked = true;
          d3.select(this).classed('selected', true);
        // }
        
      })
  }
});
