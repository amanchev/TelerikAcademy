using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter X");
            int x = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter y");
            int y = int.Parse(Console.ReadLine());

            if (x>y)
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine("false");
            }
        }
    }
}
