app.controller( 'expenseController', function ExpenseCtrl( $scope ) {
    var expenseId = 1;
    
    /**
    * Add new expense into array with expesnes.
    * @param expenseName - name of new expense.
    * @param expenseCost - cost of new expense.
    * @return array with all expenses (also with the new one).
    */
    $scope.addExpense = function( expenseName, expenseCost) {
        if ( expenseName === undefined || expenseCost === undefined ) {
            return;
        }

        var newExpense = {
            id: expenseId,
            name: expenseName,
            cost: expenseCost,
            forWhom: [],
            isCommon: false
        };
        expenseId++;
        
        if ( $scope.expenses === undefined ) {
            $scope.expenses = [];
        }
        $scope.expenses.push( newExpense );
    }
    
    /**
    * Remove expense from array wth expenses.
    * @param expense - expense to remove.
    */
    $scope.deleteExpense = function( expense ) {
        $scope.expenses.splice( expense, 1 );
    }
    
    /**
    * Return costs of all expenses.
    * @return all costs.
    */
    $scope.allCosts = function() {
        if ( $scope.expenses !== undefined ) {
            var value = 0;
            for( var i = 0; i < $scope.expenses.length; i++ ) {
                value+= $scope.expenses[i].cost;
            }
            
            return value;            
        } else {
            return 0;
        }
    }
    
    /**
    * Add expense to person and check if expense is common for everyone.
    * @param expense - expense which will be add.
    * @param person - person which will have the new expense.
    * @param isChecked - value of checkbox.
    */
    $scope.addExpenseToPerson = function( expense, person, isChecked ) {
        $.each( $scope.expenses, function() {
            if ( this.id === expense.id ) {
                if ( isChecked ) {
                    this.forWhom.push( person.id );
                    if ( compareArrays( this.forWhom, getIdOfPersons() ) ) {
                        this.isCommon = true;
                    }
                } else {
                    this.forWhom = expense.forWhom.filter( function( element ) {
                        return element !== person.id;
                    } );
                    this.isCommon = false;
                }
            }
        } )
    }
    
    /**
    * Return all expenses for person.
    * @param person - person which is using to get all expenses.
    * @return value of all expesnes. 
    */
    $scope.getAllExpensesForPerson = function( person ) {
        var returnValue = 0;
        $.each( $scope.expenses, function() {
            if ( $.inArray( person.id, this.forWhom ) !== -1 ) {
                if ( this.isCommon ) {
                    returnValue += ( this.cost / $scope.persons.length );
                } else {
                    returnValue += this.cost;
                }
            }
        } )
        
        return returnValue;
    }
    
    /**
    * Return all common expenses for person.
    * @param person - person which is using to get all common expesnes.
    * @return value of all common expenses
    */
    $scope.getCommonExpensesForPerson = function( person ) {
        var returnValue = 0;
        $.each( $scope.expenses, function() {
            if ( compareArrays( this.forWhom, getIdOfPersons() ) ) {
                if ( this.isCommon ) {
                    returnValue += ( this.cost / $scope.persons.length );
                } else {
                    returnValue += this.cost;                    
                }
            }
        } )
        
        return returnValue;
    }
    
    /**
    * Return all separate expesnes for person.
    * @param person - person which is using to get all separate expesnes.
    * @return value of all separate expenses.
    */
    $scope.getSeparateExpensesForPerson = function( person ) {
        var returnValue = 0;
        $.each( $scope.expenses, function() {
            if ( this.forWhom.length === 1 && $.inArray( person.id, this.forWhom ) !== -1 ) {
              returnValue += this.cost;
            }  
        } )
        
        return returnValue;
    }
    
    /**
    * Return summary budget for person (salary minus expesnes).
    * @param person - person which is using to get summary.
    * @param allExpensesForPerson - value of all expesnes
    * @return summary
    */
    $scope.getSummary = function( person, allExpensesForPerson ) {
        return person.salary - allExpensesForPerson;
    }
    
    /**
    * Check a checked cell after importing data from file.
    * @param expense - expense to check
    * @param person - person to check
    * @return boolean value
    */
    $scope.isCheckedAfterUpload = function( expense, person ) {
        //TODO is there better way with do that?
        var testArr = [];
        testArr.push( person.id );
        var isNameInArray = false;
        for ( var i = 0; i < expense.forWhom.length; i++) {
            if ( expense.forWhom[i] == testArr[0] ) {
                isNameInArray = true;
            }
        }
             
        if ( isNameInArray ) {
            return true;
        } else {
            return false;
        }
    }
    
    /**
    * Insert into array and return data needed for create chart for 'Expenses per person (total)'.
    * @return dataExpensesPersonTotal - array with labels and values
    */
    $scope.getDataExpensesPersonTotal = function() {
        var dataExpensesPersonTotal = [];
        $.each( $scope.persons, function() {
            //Add one by one to array
            dataExpensesPersonTotal.push( { 
                    label: this.name, 
                    value: $scope.getAllExpensesForPerson( this )
                } );
        } );
        
        return dataExpensesPersonTotal;
    }
    
    /**
    * Insert into array and return data need for create chart for 'Expenses per person (details)'.
    * @return dataExpensesPersonDetails - array with labels and values
    */
    $scope.getDataExpensesPersonDetails = function() {
        var dataExpensesPersonDetails = [];
        //Every expense
        $.each( $scope.expenses, function() {
            var expense = this;
            //Check expense for every person connected with it
            $.each( this.forWhom, function() {
                var personId = this;
                var foundPerson;
                //Find person to get name
                $.each( $scope.persons, function() {
                    if ( this.id == personId ) {
                        foundPerson = this;
                    }
                } );
                //Add into array all details about one expense (who? what? how much?)
                dataExpensesPersonDetails.push( {
                        label: foundPerson.name + ", " + expense.name,
                        value: expense.cost
                    } );  
            } );
            
        } );
        
        return dataExpensesPersonDetails;
    }
    
    /**
    * Insert into array and return data need for create chart for 'Epxnese common'.
    * @return dataExpenseCommon - array with labels and values
    */
    $scope.getDataExpensesCommon = function() {
        var dataExpensesCommon = [];
        $.each( $scope.expenses, function() {
            if ( this.isCommon ) {
                dataExpensesCommon.push( {
                        label: this.name ,
                        value: this.cost
                    } );
            }
        } );
        
        return dataExpensesCommon;
    }
    
    /**
    * Generate expenses for testing application.
    */
    $scope.generateExpenses = function() {
        var expense1 = {
            id: expenseId,
            name: 'Food',
            cost: 300,
            forWhom: [1, 2],
            isCommon: true
        }
        expenseId++;
        
        var expense2 = {
            id: expenseId,
            name: 'House',
            cost: 600,
            forWhom: [1, 2],
            isCommon: true
        }
        expenseId++;
        
        var expense3 = {
            id: expenseId,
            name: 'Transport',
            cost: 240,
            forWhom: [1],
            isCommon: false
        }
        expenseId++;
        
        var expense4 = {
            id: expenseId,
            name: 'Phone',
            cost: 40,
            forWhom: [1, 2],
            isCommon: true
        }
        expenseId++;
        
        var expense5 = {
            id: expenseId,
            name: 'Gym',
            cost: 50,
            forWhom: [1, 2],
            isCommon: true
        }
        expenseId++;
        
        var expense6 = {
            id: expenseId,
            name: 'Pole dance',
            cost: 350,
            forWhom: [2],
            isCommon: false
        }
        expenseId++;
        
        if ( $scope.expenses === undefined ) {
            $scope.expenses = [];
        }
        
        $scope.expenses.push( expense1 );
        $scope.expenses.push( expense2 );
        $scope.expenses.push( expense3 );
        $scope.expenses.push( expense4 );
        $scope.expenses.push( expense5 );
        $scope.expenses.push( expense6 );
    }
    
    /** UTILS **/
    
    /**
    * Get ID of persons
    * @return array with all IDs
    */
    function getIdOfPersons() {
        var idOfPersons = [];
        $.each( $scope.persons, function() {
          idOfPersons.push( this.id );  
        } )
        
        return idOfPersons;
    }
    
    /**
    * Compare two arrays. Return TRUE is there are the same arrays.
    * @param arr1 - left array.
    * @param arr2 - right array.
    * @return boolean value
    */
    function compareArrays( arr1, arr2 ) {
        return arr1.sort().toString() === arr2.sort().toString();
    }    
} );