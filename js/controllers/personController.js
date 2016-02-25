app.controller( 'personController', function PersonCtrl( $scope ) {
    var personId = 1;
    
    /**
    * Add new person to array with persons.
    * @param persoName - name of new person.
    * @param personSalary - salary of new person.
    */
    $scope.addPerson = function( personName, personSalary) {
        if ( personName === undefined || personSalary === undefined ) {
            return;
        }
        
        var newPerson = {
            id: personId,
            name: personName,
            salary: personSalary
        };
        personId++;
        
        if ( $scope.persons === undefined ) {
            $scope.persons = [];
        }
        $scope.persons.push( newPerson );
    }
    
    /**
    * Remove person from array with persons.
    * @param person - person to remove.
    */
    $scope.deletePerson = function( person ) {
        $scope.persons.splice( person, 1 );
    }
    
    /**
    * Return salaries for all persons.
    * @return value of all salaries.
    */
    $scope.allSalaries = function() {
        if ( $scope.persons !== undefined ) {
            var value = 0;
            for( var i = 0; i < $scope.persons.length; i++ ) {
                value+= $scope.persons[i].salary;
            }
            
            return value;            
        } else {
            return 0;
        }
    }
      
    /**
    * Generate persons for testing application.
    */
    $scope.generatePersons = function() {
        var dominikaPerson = {
            id: 1,
            name: 'Dominika',
            salary: 1100
        }
        
        var przemekPerson = {
            id: 2,
            name: 'Przemek',
            salary: 1800
        }
        
        if ( $scope.persons === undefined ) {
            $scope.persons = [];
        }
        $scope.persons.push(dominikaPerson);
        $scope.persons.push(przemekPerson);
    }
} );