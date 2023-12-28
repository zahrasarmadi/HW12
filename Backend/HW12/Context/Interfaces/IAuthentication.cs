using HW12.Entity;

namespace HW12.Context.Interfaces;

public interface IAuthentication
{
    public Person Login(LoginDTO login);
    public Person Register(Person person);
}
