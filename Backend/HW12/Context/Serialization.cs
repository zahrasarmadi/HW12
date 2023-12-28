using HW12.Entity;
using Newtonsoft.Json;
using System.Net;

namespace HW12.Context;

public class Serialization
{
    public Serialization(string path)
    {
        this.path = path;
    }

    private readonly string path;

    public void SaveToFileWhitWrite(List<Person> persons)
    {
        var stringPersons = JsonConvert.SerializeObject(persons);
        File.WriteAllText(path, stringPersons);
    }
    //public void SaveToFileWhitAppend(List<Person> persons)
    //{
    //    var stringPersons = JsonConvert.SerializeObject(persons);
    //    File.AppendAllText(path, stringPersons + Environment.NewLine);
    //}

    public List<Person> ReadFromFile()
    {
        if (File.Exists(path))
        {
            var fileData = File.ReadAllText(path);
            var result = JsonConvert.DeserializeObject<List<Person>>(fileData);
            return result;
        }
        else
        {
            File.Create(path).Close();
            var fileData = File.ReadAllText(path);
            var result = JsonConvert.DeserializeObject<List<Person>>(fileData);
            return result;
        }
    }
    

    //public string SerilizeToJson(Person Person)
    //{
    //    return JsonConvert.SerializeObject(Person);
    //}
    //public Person DeserilizeJson(string json)
    //{
    //    return JsonConvert.DeserializeObject<Person>(json);
    //}
}
