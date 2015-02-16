# Thomas Eggar Development Wheel

Workers rate their proficiency between 1 (poor) to 5 (excellent) in various areas:

	Client Management:

	[x] 1 (Poor)
	[ ] 2 (OK)
	[ ] 3 (Good)
	[ ] 4 (Great)
	[ ] 5 (Excellent)

Instead of just using radio buttons, however, they're visualised in the form of a polar grid.

Each slice of the pie represents an area of ability (working with clients, for instance), and each segment of the slice indicates the user's proficiency in it.

Each user will be able to select one segment per area of ability, equivalent to 1-5, then eventually submit it as if it were a form.

The chart is built in d3 and fed data through a hard-coded array.

The HTML, however, is not entirely generated. Adding a new segment would involve additions to the markup (for the form/modal) or editing the d3 script to generate this based on the array data.

## Requirements
- d3

Built with vanilla JS & d3.

## Spec
- Built for internal use
- IE10 +
- Does not need to meet accessibility requirements
- Does not need to function on mobile or tablet devices
