from django.db import models

class Address(models.Model):
    a_code = models.CharField(max_length=200)
    a_address= models.CharField(max_length=200)
#댓글 내용을 클릭하지 않아도 볼수 있게 
    def __str__(self):
        return self.a_code
    
class User(models.Model):
    u_id = models.CharField(max_length=200)
    u_pw=  models.CharField(max_length=200)
    a_code=models.ForeignKey(Address, on_delete=models.CASCADE)
    def __str__(self):
        return self.u_id

class Cloth(models.Model):
    c_code = models.CharField(max_length=200)
    c_category= models.CharField(max_length=200)
    c_size= models.CharField(max_length=200)
    c_color= models.CharField(max_length=200)
    c_price= models.CharField(max_length=200)
    c_count= models.CharField(max_length=200)
    def __str__(self):
        return self.c_code
    
class Purchase(models.Model):
    p_code = models.CharField(max_length=200)
    c_code=  models.ForeignKey(Cloth, on_delete=models.CASCADE)
    u_id = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.p_code
    
class Cart(models.Model):
    ca_code= models.CharField(max_length=200)
    u_id=  models.ForeignKey(User, on_delete=models.CASCADE)
    c_code=models.ForeignKey(Cloth, on_delete=models.CASCADE)
    def __str__(self):
        return self.ca_code

class Review(models.Model):
    r_code = models.CharField(max_length=200)
    u_id=  models.ForeignKey(User, on_delete=models.CASCADE)
    r_title= models.CharField(max_length=200)
    r_content= models.CharField(max_length=200)
    u_size=models.CharField(max_length=200)
    r_star=  models.IntegerField(choices=((1, '1점'), (2, '2점'), (3, '3점'), (4, '4점'), (5, '5점')), default=5)
    SIZES = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
        ('XL', 'Extra Large'),
    )
    r_size = models.CharField(max_length=2, choices=SIZES)
    def __str__(self):
        return self.r_code
    