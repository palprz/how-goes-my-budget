app.controller( 'expenseController', function ExpenseCtrl( $scope ) {
    var expenseId = 1;
    
    //TODO Change person.name to person.id
    //TODO generate expenseId with correct way
    
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
                    this.forWhom.push( person.name );
                    if ( compareArrays( this.forWhom, getNameOfPersons() ) ) {
                        this.isCommon = true;
                    }
                } else {
                    this.forWhom = expense.forWhom.filter( function(element) {
                        return element !== person.name; 
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
            if ( $.inArray( person.name, this.forWhom ) !== -1 ) {
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
            if ( compareArrays( this.forWhom, getNameOfPersons() ) ) {
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
            if ( this.forWhom.length === 1 && $.inArray( person.name, this.forWhom ) !== -1 ) {
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
    * TODO documentation
    */
    $scope.isCheckedAfterUpload = function( expense, person ) {
        //TODO please, change this compare arrays ;_;
        var testArr = [];
        testArr.push( person.name );
        var isNameInArray = false;
        for ( var i = 0; i < expense.forWhom.length; i++) {
            if ( expense.forWhom[i] == testArr[0] ) {
                isNameInArray = true;
            }
        }
        //TODO end of changing
             
        if ( isNameInArray ) {
            return true;
        } else {
            return false;
        }
    }
    
    /**
    * Generate expenses for testing application.
    */
    $scope.generateExpenses = function() {
        var firstExpense = {
            id: 1,
            name: 'Food',
            cost: 300,
            forWhom: ['Dominika','Przemek'],
            isCommon: true
        }
        
        var secondExpense = {
            id: 2,
            name: 'House',
            cost: 600,
            forWhom: ['Dominika', 'Przemek'],
            isCommon: true
        }
        
        var thirdExpense = {
            id: 3,
            name: 'Transport',
            cost: 240,
            forWhom: ['Przemek'],
            isCommon: false
        }
        
        var fourthExpense = {
            id: 4,
            name: 'Phone',
            cost: 40,
            forWhom: ['Dominika', 'Przemek'],
            isCommon: true
        }
        
        var fifthExpense = {
            id: 5,
            name: 'Gym',
            cost: 50,
            forWhom: ['Dominika', 'Przemek'],
            isCommon: true
        }
        
        var sixthExpense = {
            id: 6,
            name: 'Pole dance',
            cost: 350,
            forWhom: ['Dominika'],
            isCommon: false
        }
        
        expenseId = 7;
        
        if ( $scope.expenses === undefined ) {
            $scope.expenses = [];
        }
        $scope.expenses.push( firstExpense );
        $scope.expenses.push( secondExpense );
        $scope.expenses.push( thirdExpense );
        $scope.expenses.push( fourthExpense );
        $scope.expenses.push( fifthExpense );
        $scope.expenses.push( sixthExpense );
    }
    
    /** UTILS **/
    
    /**
    * TODO documentation
    * TODO names of persons? name of persons?
    */
    function getNameOfPersons() {
        var nameOfPersons = [];
        $.each( $scope.persons, function() {
          nameOfPersons.push( this.name );  
        } )
        
        return nameOfPersons;
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