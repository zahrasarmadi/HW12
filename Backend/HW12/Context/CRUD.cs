using HW12.Entity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.IO;

namespace HW12.Context;

public class CRUD: Interfaces.ICRUD
{
    Serialization serialization = new Serialization("person.json");

    public void CreatePerson(Person newPerson)
    {
        var persons = serialization.ReadFromFile();
        persons.Add(newPerson);
        serialization.SaveToFileWhitWrite(persons);
    }


    public bool UpdatePerson(Person newPerson)
    {
        var persons = serialization.ReadFromFile();
        var person = persons.FirstOrDefault(p => p.Email == newPerson.Email);
        if (person != null)
        {
            persons.Remove(person);
            persons.Add(newPerson);
            serialization.SaveToFileWhitWrite(persons);
            return true;
        }
        else
        {
            return false;
        }
    }

    public Person GetPersonByEmail(string email)
    {
        var persons = serialization.ReadFromFile();
        var targrtPerson = persons.FirstOrDefault(p => p.Email == email);
        if (targrtPerson != null)
        {
            return targrtPerson;
        }
        return null;
    }

    public List<Person> GetAllPersons()
    {
        DataBase.people=serialization.ReadFromFile();
        return DataBase.people;
    }
    public bool DeletePerson(string email)
    {
        var persons = serialization.ReadFromFile();
        var targetPerson = persons.FirstOrDefault(p => p.Email == email);
        if (targetPerson != null)
        {
            persons.Remove(targetPerson);
            serialization.SaveToFileWhitWrite(persons);
            return true;
        }
        return false;
    }


    //public bool DeActivePersons(List<string> emails)
    //{
    //    var persons=serialization.ReadFromFile();
    //    var targetPersons= persons.Where(p => emails.Any(e=>e==p.Email));
    //    if (targetPersons != null)
    //    {
    //        targetPersons.Where(p=>p.Active=false);
    //        serialization.SaveToFileWhitWrite(persons);
    //        return true;
    //    }
    //    return false;
    //}

    //public bool ActivePersons(List<string> emails)
    //{
    //    var persons = serialization.ReadFromFile();
    //    var targetPersons = persons.Where(p => emails.Any(e => e == p.Email));
    //    if (targetPersons != null)
    //    {
    //        targetPersons.Where(p => p.Active = true);
    //        serialization.SaveToFileWhitWrite(persons);
    //        return true;
    //    }
    //    return false;
    //}

    public bool DeActivePerson(string email)
    {
        var persons = serialization.ReadFromFile();
        var targetPerson = persons.FirstOrDefault(p => p.Email==email);
        if (targetPerson != null)
        {
            targetPerson.Active= false;
            serialization.SaveToFileWhitWrite(persons);
            return true;
        }
        return false;
    }

    public bool ActivePerson(string email)
    {
        var persons = serialization.ReadFromFile();
        var targetPerson = persons.FirstOrDefault(p => p.Email == email);
        if (targetPerson != null)
        {
            targetPerson.Active = true;
            serialization.SaveToFileWhitWrite(persons);
            return true;
        }
        return false;
    }
}

