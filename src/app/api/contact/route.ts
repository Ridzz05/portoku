import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi.' },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const text = `📬 *Pesan Baru dari Website Portfolio*\n\n👤 *Nama:* ${name}\n📧 *Email:* ${email}\n\n💬 *Pesan:*\n${message}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error('Telegram API error:', data);
      return NextResponse.json(
        { error: 'Gagal mengirim pesan.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server.' },
      { status: 500 }
    );
  }
}
