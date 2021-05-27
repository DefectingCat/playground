/** 
 * 这个程序用于统计用户输入的字符数量
 * 并统计单词数和行数
 */
#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#define STOP '#'

int main(void)
{
  char ch;             // 输入的字符
  long n_chars = 0L;   // 字符总数
  int n_lines = 0;     // 总行数
  int n_words = 0;     // 总单词数
  bool inword = false; // 判断是否是单词

  printf("Enter text to be analyzed (# to terminate): \n");

  while ((ch = getchar()) != STOP)
  {
    n_chars++; // 总字符数++
    if (ch == '\n')
    {
      n_lines++; // 如果换行了，则行数++
    }
    if (!isspace(ch) && !inword)
    {
      inword = true; // 遇到字符非空白时，标记 inword 为 true
      n_words++;     // 并单词数++
    }
    if (isspace(ch) && inword)
    {
      inword = false; // 遇到空白时，inword 重新标记为 false
    }
  }

  printf("characters = %ld, words = %d, lines = %d! \n", n_chars, n_words, n_lines);

  system("pause");
  return 0;
}