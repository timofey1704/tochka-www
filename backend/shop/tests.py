from django.test import TestCase
from .models import Clients, Instruments, Requests, Schedule, Texts
from django.utils import timezone

class ClientsModelTest(TestCase):
    def setUp(self):
        self.client = Clients.objects.create(
            title="Test Client",
            img_url="http://example.com/image.jpg",
            url="http://example.com"
        )

    def test_client_creation(self):
        self.assertEqual(self.client.title, "Test Client")
        self.assertEqual(self.client.img_url, "http://example.com/image.jpg")
        self.assertEqual(self.client.url, "http://example.com")
        self.assertEqual(str(self.client), "Test Client")


class InstrumentsModelTest(TestCase):
    def setUp(self):
        self.instrument = Instruments.objects.create(
            title="Test Instrument",
            img_url="http://example.com/image.jpg",
            description="Test Description",
            link="http://example.com",
            price="1000"
        )

    def test_instrument_creation(self):
        self.assertEqual(self.instrument.title, "Test Instrument")
        self.assertEqual(self.instrument.img_url, "http://example.com/image.jpg")
        self.assertEqual(self.instrument.description, "Test Description")
        self.assertEqual(self.instrument.link, "http://example.com")
        self.assertEqual(self.instrument.price, "1000")
        self.assertEqual(str(self.instrument), "Test Instrument")


class RequestsModelTest(TestCase):
    def setUp(self):
        self.request = Requests.objects.create(
            telegram_id="123456789",
            date=timezone.now(),
            phone="123-456-7890",
            end_time="18:00"
        )

    def test_request_creation(self):
        self.assertEqual(self.request.telegram_id, "123456789")
        self.assertEqual(self.request.phone, "123-456-7890")
        self.assertEqual(self.request.end_time, "18:00")
        self.assertEqual(str(self.request), "123456789")


class ScheduleModelTest(TestCase):
    def setUp(self):
        self.schedule = Schedule.objects.create(
            date=timezone.now(),
            time="10:00",
            end_time="18:00"
        )

    def test_schedule_creation(self):
        self.assertEqual(self.schedule.time, "10:00")
        self.assertEqual(self.schedule.end_time, "18:00")
        self.assertEqual(str(self.schedule), str(self.schedule.date))


class TextsModelTest(TestCase):
    def setUp(self):
        self.text = Texts.objects.create(
            text="Sample text",
            path="/sample/"
        )

    def test_text_creation(self):
        self.assertEqual(self.text.text, "Sample text")
        self.assertEqual(self.text.path, "/sample/")
        self.assertEqual(str(self.text), "/sample/")
