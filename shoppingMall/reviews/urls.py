from django.urls import path
from .views import product_list_view, product_detail_view, review_create_view

urlpatterns = [
    path('', product_list_view, name='product_list'),
    path('<int:1>/', product_detail_view, name='product_detail'),
    path('<int:pk>/review/', review_create_view, name='review_create'),
]