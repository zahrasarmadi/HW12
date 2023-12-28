using HW12.Entity;

namespace HW12.Context.Interfaces
{
    public interface ICRUD
    {
        public void CreatePerson(Person newPerson);
        public bool UpdatePerson(Person newPerson);
        public Person GetPersonByEmail(string email);
        public List<Person> GetAllPersons();
        public bool DeletePerson(string email);
    }
}
