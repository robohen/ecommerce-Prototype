import React, {Component} from "react";

export default class CustomersList extends Component{
    
state = {pageTitle: "Customers",
         customersCount:5,
         customers: [
            {id:1, name: "Anthony S. Steele", phone: "606-619-0086", address:{ city:"Moreno Valley"}, photo: "https://picsum.photos/id/1011/60",},                  //each customer is an object literal
            {id:2, name: "Sandy R. Sanchez", phone: "505-581-9212", address:{ city:"Riverside"}, photo: "https://picsum.photos/id/1012/60",}, 
            {id:3, name: "Sara W. Verdin", phone: "517-985-3629", address:{ city:"Sun City"}, photo: "https://picsum.photos/id/1013/60",}, 
            {id:4, name: "Kelly G. Slagle", phone: null, address:{ city:"Moon City"}, photo: "https://picsum.photos/id/1014/60",}, 
            {id:5, name: "David D. Leister", phone: "641-497-9678", address:{ city:"Land City"}, photo: "https://picsum.photos/id/1015/60",},
         ],
        };    
    /*customerNameStyle = (custName) => {
        if(custName.startsWith("S")) return "green-highlight border-left";          // conditioner css styles rendering
        else if (custName.startsWith("K")) return "red-highlight border-right";
        else return "";
    };*/
    
    render (){
        return(<div>
            <h4 className=" m-1 p-1">{this.state.appTitle}
                <span className="badge badge-secondary m-2">
                {this.state.customersCount}
                </span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
            <table className ="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getCustomerRow()}
                </tbody>
            </table>
        </div>
        );
    }
    //Executes when the user clicks the Refresh button
    onRefreshClick = () =>
    {
        this.setState({
            customersCount:7,   //this button changes the number from a 5 to a 7 or whatever is put inside this
        });
    };

getPhoneToRender = (phone) => {
            if (phone) return phone;
                else{ 
                    return <div className="bg-warning p-2 text-center">No Phone</div>;
            }
        }
    getCustomerRow = () =>{
        return this.state.customers.map((cust, index)=> { // use map arrow function to display the data of the customers from the array this is used in the functions below
            return (
                <tr key={cust.id}>
                <td>{cust.id}</td>
                <td><img src={cust.photo} alt="Customer"/>
                    <div>
                    <button className="btn btn-sm btn-secondary" onClick={() => {this.onChangePictureClick(cust, index);}}>Change Picture
                    </button>  
                    </div>
                    </td>
                <td>
                {cust.name}</td>
                <td>{this.getPhoneToRender(cust.phone)}</td>
                 <td>{cust.address.city}</td>    
                </tr>
            );
        });
    };
    //executes when the user clicks on "Change Picture" button in the grid
    //Receieves the "customer" object and index of the currently clicked customer
    
    onChangePictureClick = (cust, index) => {
        //console.log(cust);
        //console.log(index);

        // gets existing customers
        var custArr = this.state.customers;
        custArr[index].photo = "http://picsum.photos/id/104/60";
        //update "customers" array in the state
        this.setState({customers:custArr});

    };
}
