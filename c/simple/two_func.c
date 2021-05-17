#include <stdio.h>

void saySomething(void);

int main(void)
{
  printf("run a function!\n");
  saySomething();
  printf("done!\n");

  return 0;
}

void saySomething(void)
{
  printf("I am a function.\n");
}