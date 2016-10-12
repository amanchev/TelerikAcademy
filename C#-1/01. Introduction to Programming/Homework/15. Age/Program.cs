using System;
using System.Globalization;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


    class PrintAge
    {
        static void Main(string[] args)
        {

            DateTime Birthday = DateTime.ParseExact(Console.ReadLine(), "MM.dd.yyyy", null);
            DateTime now = System.DateTime.Now;
            int age = now.Year - Birthday.Year;
            if (now.Month < Birthday.Month || (now.Month == Birthday.Month && now.Date < Birthday.Date))
            {
                age--;
            }
            Console.WriteLine(age);
            Console.WriteLine(age + 10);
        }
    }
