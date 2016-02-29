# How goes my budget [March 2016]

Web application for creating simple plan of budget (e.g. for family).

## Technologies
1. Frontend
  - AngularJS ver. 1.3.3
  - jQuery ver. 1.12.0
  - FusionCharts ver. 3.10.1
  - LESS(CSS3)
  - HTMLS5

## Functionalities:
User can:
- add person (name and salary)
- add expense (name and cost)
- show table with persons, expenses and summary of expenses
- check the checkbox in expenses table for person
- show 3 charts with different size and ways to show data

If expense is checked for everybody, it's mean, that's a common expense.
If end of summary (salary minus expenses per person) is bigger than 0 -> there will be a green cell. Otherwise, there will be a red cell.
Every second row in tables is grey to better showing data.
When a user would like to refresh or close the page, there will be information about losing all data.

Charts:
  - first (expenses per person - total):
    - label is showing name and percent of all expenses for that person
    - hover label is showing total cost of expenses for this person
  - second (expenses per person - details):
    - label with name of (every) expense with percent of expenses for all persons
    - hover label is showing cost of this expense
  - third (common expenses):
    - label with name of expense and percent of expenses for all persons
    - hover label is showing

## Steps for run the application:
1. Download project
2. Open `index.html` and that's it!

## Screens from running application
1) Homepage after open page<br />
![alt text][homepage_img]

2) Adding new person and table with persons<br />
![alt text][add_person_img]

3) Adding new expense and table with expenses<br />
![alt text][add_expense_img]

4) Test data<br />
![alt text][test_data_img]

5) First chart<br />
![alt text][first_chart_img]

6) Second chart<br />
![alt text][second_chart_img]

7) Third chart<br />
![alt text][third_chart_img]

[homepage_img]: https://github.com/palprz/how-goes-my-budget/blob/master/markdown_img_homepage.png
[add_person_img]: https://github.com/palprz/how-goes-my-budget/blob/master/markdown_img_add_person.png
[add_expense_img]: https://github.com/palprz/how-goes-my-budget/blob/master/markdown_img_add_expense.png
[test_data_img]: https://github.com/palprz/how-goes-my-budget/blob/master/markdown_img_test_data.png
[first_chart_img]: https://github.com/palprz/how-goes-my-budget/blob/master/markdown_img_first_chart.png
[second_chart_img]: https://github.com/palprz/how-goes-my-budget/blob/master/markdown_img_second_chart.png
[third_chart_img]:https://github.com/palprz/how-goes-my-budget/blob/master/markdown_img_third_chart.png
