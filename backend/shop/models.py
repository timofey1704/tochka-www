from django.db import models

# models list:
# clients
# instruments
# requests
# schedule
# texts

class Clients(models.Model):
    title = models.CharField(max_length=255)
    img_url = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Клиент"
        verbose_name_plural = "Клиенты"
    
    def __str__(self):
        return self.title
class Instruments(models.Model):
    title = models.CharField(max_length=255)
    img_url = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Инструмент"
        verbose_name_plural = "Инструменты"
    
    def __str__(self):
        return self.title
    
class Requests(models.Model):
    telegram_id = models.CharField(max_length=255)
    date = models.DateTimeField()
    phone = models.CharField(max_length=255)
    end_time = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Запись"
        verbose_name_plural = "Записи"
    
    def __str__(self):
        return self.telegram_id
    
class Schedule(models.Model):
    date = models.DateTimeField()
    time = models.CharField(max_length=255)
    end_time = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Расписание"
        verbose_name_plural = "Расписания"
    
    def __str__(self):
        return self.date
    
class Texts(models.Model):
    name = models.CharField(max_length=1000, null=True)
    description = models.CharField(max_length=256, null=True)
    link = models.CharField(max_length=255, null=True)
    icon = models.CharField(max_length=255, null=True)
    component = models.CharField(max_length=20, null=True)
    
    class Meta:
        verbose_name = "Текст"
        verbose_name_plural = "Тексты"
    
    def __str__(self):
        return self.component
    