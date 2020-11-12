from django.db import models

TOPIC_CHOISES = [
        ("soc", "Типы обществ"),
        ("tax", "Налоги"),
        ("fam", "Семья"),
        ("state", "Государство")
        ]


class Theme(models.Model):
    theme = models.CharField('Тема', max_length=64, choices=TOPIC_CHOISES)
    isChosen = models.BooleanField('Выбрана', default=False)

    def __str__(self):
        return self.theme


class Secquiz(models.Model):
    topic = models.CharField('Тема', max_length=64, choices=TOPIC_CHOISES)
    questionText = models.TextField('Вопрос')
    option1 = models.CharField('Вариант 1', max_length=64)
    option2 = models.CharField('Вариант 2', max_length=64)
    option3 = models.CharField('Вариант 3', max_length=64)
    option4 = models.CharField('Вариант 4', max_length=64)
    answerText = models.CharField('Правильный вариант', max_length=64)

    def __str__(self):
        return self.questionText

    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Тренажер №2'
