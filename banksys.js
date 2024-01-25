// class Banksyst{
//     constructor(id,owner,balance = 0){
//         this.id = id 
//         this.owner = owner
//         this.balance = balance
//     }
//     deposit(amount){
//         this.balance +=amount
//         return this.balance;
//     }
//      withdraw(amount){
//         if(amount > this.balance){
//             return "Pox chka";
//             }
//         this.balance -= amount
//         return this.balance
//      }

//      getBalance() {
//         return this.balance;
//       }

//     transfer(amount, targetAccount) {
//         if (amount > this.balance) {
//           return "Pox chka";
//         }
    
//         this.balance -= amount;
//         targetAccount.balance += amount;
//         return this.balance;
//       }

// }
//    class PersonAccounts extends Banksyst {
//         constructor(accountNumber, ownerName, balance = 0) {
//           super(accountNumber, ownerName, balance);
//           this.accounts = [];
//         }
      
//         addAccount(account) {
//           this.accounts.push(account);
//         }
      
//         getAccount(accountNumber) {
//           return this.accounts.find(account => account.id === accountNumber);
//         }
      
//         getAccountBalance(accountNumber) {
//           const account = this.getAccount(accountNumber);
//           return account ? account.getBalance() : "Account not found";
//         }
      
//         getAllAccounts() {
//           return this.accounts;
//         }
      
//         getTotalBalance() {
//           return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
//         }
//       }



//       const account1 = new Banksyst(1, "Alo", 100);
//       const account2 = new Banksyst(2, "BLo", 50);
      
//       const person = new PersonAccounts("Person1", "AloBlo");
//       person.addAccount(account1);
//       person.addAccount(account2);
      
//       console.log(person.getTotalBalance());
//       console.log(person.getAccountBalance(1));
      
//       person.transfer(30, account2);
      
//       console.log(person.getTotalBalance());
//       console.log(person.getAccountBalance(2));
//       console.log(person.getAllAccounts())

   