#include <stdio.h>
int main(void)
{
  double d_one_year = 3.156e7;
  double d_age, d_size;

  printf("Please enter your age: ");

  scanf("%lf", &d_age);

  d_size = d_one_year * d_age;
  printf("\nYour age as second is %e s", d_size);
  printf("\nAlso, it is take %d bytes", sizeof(d_size));

  return 0;
}