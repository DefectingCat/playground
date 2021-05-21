#include <stdio.h>

int main(void)
{
  char firstname[20];
  char lastname[20];

  printf("Please enter your name:");
  scanf("%s %s", firstname, lastname);

  printf("Hi! %s %s", firstname, lastname);

  return 0;
}