#include <stdio.h>
#include <string.h>

int main(void)
{
  char firstname[20];
  char lastname[20];

  printf("Please enter your name:\n");

  scanf("%s %s", firstname, lastname);

  printf("%-9s %-9s\n", firstname, lastname);
  printf("%-9lu %-9lu\n", strlen(firstname), strlen(lastname));

  return 0;
}