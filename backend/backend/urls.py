from django.urls import path, include
from rest_framework import routers
from django.contrib import admin
from api import views

router = routers.DefaultRouter()
router.register(r'citas', views.CitasViewSet)
router.register(r'clientes', views.ClientesViewSet)
router.register(r'pacientes', views.PacientesViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
