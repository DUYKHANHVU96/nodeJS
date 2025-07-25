// ChatGPT API Service
const OPENAI_API_KEY = 'your-openai-api-key-here'; // Thay thế bằng API key thực của bạn
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// System prompt cho MyWhey AI
const SYSTEM_PROMPT = `Bạn là MyWhey AI - một trợ lý tư vấn chuyên nghiệp về thực phẩm bổ sung và dinh dưỡng thể thao. 

Chuyên môn của bạn:
- Tư vấn về Whey Protein, Creatine, Vitamin D3K2, Omega-3, Pre-Workout
- Hướng dẫn chế độ dinh dưỡng tăng cơ, giảm mỡ
- Tư vấn chế độ tập luyện và bổ sung
- Giải thích khoa học về supplement

Quy tắc trả lời:
1. Trả lời bằng tiếng Việt, thân thiện và dễ hiểu
2. Đưa ra lời khuyên dựa trên khoa học
3. Luôn nhắc nhở tham khảo ý kiến bác sĩ khi cần thiết
4. Gợi ý sản phẩm phù hợp khi có thể
5. Giữ câu trả lời ngắn gọn nhưng đầy đủ thông tin

Nếu câu hỏi không liên quan đến supplement/dinh dưỡng, hãy nhẹ nhàng chuyển hướng về chủ đề chuyên môn của bạn.`;

export class ChatGPTService {
  constructor() {
    this.apiKey = OPENAI_API_KEY;
    this.conversationHistory = [];
  }

  // Thêm message vào lịch sử hội thoại
  addToHistory(role, content) {
    this.conversationHistory.push({ role, content });
    
    // Giữ chỉ 10 messages gần nhất để tránh token limit
    if (this.conversationHistory.length > 10) {
      this.conversationHistory = this.conversationHistory.slice(-10);
    }
  }

  // Gọi ChatGPT API
  async chatWithGPT(userMessage) {
    try {
      // Thêm user message vào history
      this.addToHistory('user', userMessage);

      // Chuẩn bị messages cho API
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...this.conversationHistory
      ];

      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 500,
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      // Thêm AI response vào history
      this.addToHistory('assistant', aiResponse);

      return aiResponse;

    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      
      // Fallback responses khi API không hoạt động
      return this.getFallbackResponse(userMessage);
    }
  }

  // Fallback responses khi API không hoạt động
  getFallbackResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Kiểm tra các từ khóa và trả về response phù hợp
    if (lowerMessage.includes('whey') || lowerMessage.includes('protein')) {
      return "Whey Protein là nguồn protein chất lượng cao, chứa đầy đủ axit amin thiết yếu. Thời điểm uống tốt nhất là sau khi tập 30 phút với liều lượng 20-30g protein. Có 3 loại chính: Concentrate (70-80% protein), Isolate (90%+ protein), và Hydrolysate (hấp thu nhanh nhất).";
    }
    
    if (lowerMessage.includes('creatine')) {
      return "Creatine giúp tái tạo ATP - nguồn năng lượng chính cho cơ bắp. Liều lượng khuyến nghị: 3-5g/ngày. Giai đoạn nạp: 20g/ngày chia 4 lần trong 5-7 ngày. Giai đoạn duy trì: 3-5g/ngày. Giúp tăng sức mạnh, sức bền và khối lượng cơ.";
    }
    
    if (lowerMessage.includes('vitamin d3') || lowerMessage.includes('vitamin k2')) {
      return "Vitamin D3 giúp hấp thu canxi, Vitamin K2 định hướng canxi vào xương thay vì mạch máu. Liều lượng: D3 1000-4000 IU/ngày, K2 100-200 mcg/ngày. Uống cùng bữa ăn có chất béo. Cần thiết cho người ít tiếp xúc ánh nắng, người cao tuổi, người tập gym.";
    }
    
    if (lowerMessage.includes('omega') || lowerMessage.includes('dầu cá')) {
      return "Omega-3 gồm EPA (chống viêm) và DHA (tốt cho não). Liều lượng: 1000-2000mg EPA+DHA/ngày cho người tập thể thao. Giúp giảm viêm cơ sau tập, tăng cường tim mạch, cải thiện nhận thức và giấc ngủ. Nguồn: Cá béo, hạt chia, quả óc chó.";
    }
    
    if (lowerMessage.includes('tăng cơ') || lowerMessage.includes('dinh dưỡng')) {
      return "Để tăng cơ: Calorie surplus 300-500 calo/ngày, protein 1.6-2.2g/kg, carb 4-7g/kg, fat 0.8-1.2g/kg. Thời điểm ăn quan trọng: Bữa sáng (protein + carb), trước tập 2-3h (bữa chính), sau tập 30 phút (protein + carb).";
    }
    
    if (lowerMessage.includes('giảm mỡ')) {
      return "Để giảm mỡ: Calorie deficit 300-500 calo/ngày, duy trì protein cao, giảm carb thông minh. Có thể áp dụng Intermittent Fasting (16:8) hoặc Carb Cycling. Quan trọng là duy trì tập luyện và ngủ đủ giấc.";
    }
    
    return "Cảm ơn câu hỏi của bạn! Tôi có thể tư vấn về supplement, dinh dưỡng, hoặc gợi ý sản phẩm phù hợp. Bạn muốn biết thêm về chủ đề nào? (Lưu ý: Hiện tại tôi đang sử dụng chế độ offline, một số tính năng có thể bị hạn chế)";
  }

  // Reset conversation history
  resetConversation() {
    this.conversationHistory = [];
  }

  // Kiểm tra API key
  isApiKeySet() {
    return this.apiKey && this.apiKey !== 'your-openai-api-key-here';
  }
}

// Export instance
export const chatGPTService = new ChatGPTService(); 