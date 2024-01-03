using HW12.Entity;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption;
using Microsoft.AspNetCore.Mvc;

namespace HW12.Context;

public class Authentication : Interfaces.IAuthentication
{
    Serialization serialization = new Serialization("person.json");
    public Person Login(LoginDTO login)
    {
        DataBase.people=serialization.ReadFromFile();
        
        var loginPerson=DataBase.people.FirstOrDefault(p=>p.Email == login.Email && p.Password == login.Password);
        if(loginPerson == null)
        {
            Console.WriteLine("Email or password is wrong");
            return null;
        }
        return loginPerson;
    }
    public Person Register(Person person)
    {
        DataBase.people.Add(person);
        serialization.SaveToFileWhitWrite(DataBase.people);
        return person;
    }
}
