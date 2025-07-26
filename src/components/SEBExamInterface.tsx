import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl,
  Paper,
  Chip,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import { 
  Description as DescriptionIcon,
  Save as SaveIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Refresh as RefreshIcon,
  FastRewind as FastRewindIcon,
  Star as StarIcon,
  BatteryFull as BatteryIcon,
  Wifi as WifiIcon,
  PowerSettingsNew as PowerIcon,
  VolumeUp as VolumeUpIcon
} from '@mui/icons-material';

// Dữ liệu câu hỏi về Mác-Lê nin chính trị
const allQuestions = [
  {
    id: 1,
    question: "Chủ nghĩa Mác-Lê nin ra đời vào thế kỷ nào?",
    options: ["Thế kỷ XVIII", "Thế kỷ XIX", "Thế kỷ XX", "Thế kỷ XXI"],
    correct: "B"
  },
  {
    id: 2,
    question: "Ai là người sáng lập chủ nghĩa Mác-Lê nin?",
    options: ["Marx và Engels", "Lenin và Stalin", "Marx và Lenin", "Engels và Lenin"],
    correct: "A"
  },
  {
    id: 3,
    question: "Tác phẩm nào sau đây của Marx được coi là kinh tế chính trị học?",
    options: ["Tuyên ngôn Đảng Cộng sản", "Tư bản", "Gia đình, tư hữu và nhà nước", "Phê phán chương trình Gotha"],
    correct: "B"
  },
  {
    id: 4,
    question: "Chủ nghĩa duy vật lịch sử nghiên cứu quy luật vận động và phát triển của:",
    options: ["Tự nhiên", "Tư duy", "Xã hội loài người", "Vũ trụ"],
    correct: "C"
  },
  {
    id: 5,
    question: "Theo Marx, cơ sở hạ tầng của xã hội bao gồm:",
    options: ["Lực lượng sản xuất", "Quan hệ sản xuất", "Lực lượng sản xuất và quan hệ sản xuất", "Ý thức xã hội"],
    correct: "C"
  },
  {
    id: 6,
    question: "Giai cấp vô sản theo Marx là giai cấp:",
    options: ["Có tư liệu sản xuất", "Không có tư liệu sản xuất", "Có ít tư liệu sản xuất", "Có nhiều tư liệu sản xuất"],
    correct: "B"
  },
  {
    id: 7,
    question: "Cách mạng xã hội chủ nghĩa diễn ra khi nào?",
    options: ["Khi có đủ điều kiện khách quan", "Khi có đủ điều kiện chủ quan", "Khi có đủ điều kiện khách quan và chủ quan", "Khi nhân dân muốn"],
    correct: "C"
  },
  {
    id: 8,
    question: "Chủ nghĩa xã hội khoa học được Marx và Engels sáng lập dựa trên:",
    options: ["Triết học cổ điển Đức", "Kinh tế chính trị học cổ điển Anh", "Chủ nghĩa xã hội không tưởng Pháp", "Cả ba nguồn gốc trên"],
    correct: "D"
  },
  {
    id: 9,
    question: "Nhà nước kiểu mới đầu tiên trên thế giới do Lenin lãnh đạo thành lập là:",
    options: ["Công xã Paris", "Nhà nước Xô viết", "Nhà nước Trung Quốc", "Nhà nước Cuba"],
    correct: "B"
  },
  {
    id: 10,
    question: "Tác phẩm 'Nhà nước và cách mạng' của Lenin viết năm nào?",
    options: ["1916", "1917", "1918", "1919"],
    correct: "B"
  },
  {
    id: 11,
    question: "Đảng Cộng sản theo Lenin phải là đảng:",
    options: ["Của toàn dân", "Của giai cấp công nhân", "Của trí thức", "Của nông dân"],
    correct: "B"
  },
  {
    id: 12,
    question: "Chính sách NEP của Lenin là gì?",
    options: ["Chính sách kinh tế mới", "Chính sách nông nghiệp mới", "Chính sách công nghiệp mới", "Chính sách đối ngoại mới"],
    correct: "A"
  },
  {
    id: 13,
    question: "Mâu thuẫn cơ bản của chủ nghĩa tư bản theo Marx là:",
    options: ["Giữa tư bản và lao động", "Giữa sản xuất xã hội và chiếm hữu tư nhân", "Giữa giàu và nghèo", "Giữa thành thị và nông thôn"],
    correct: "B"
  },
  {
    id: 14,
    question: "Chủ nghĩa đế quốc là giai đoạn nào của chủ nghĩa tư bản?",
    options: ["Giai đoạn đầu", "Giai đoạn phát triển", "Giai đoạn cao nhất", "Giai đoạn cuối"],
    correct: "C"
  },
  {
    id: 15,
    question: "Cách mạng tháng Mười Nga năm 1917 do ai lãnh đạo?",
    options: ["Marx", "Engels", "Lenin", "Stalin"],
    correct: "C"
  },
  {
    id: 16,
    question: "Chủ nghĩa quốc tế vô sản là:",
    options: ["Sự đoàn kết của giai cấp công nhân thế giới", "Sự hợp tác giữa các nước", "Sự thống nhất tôn giáo", "Sự hòa bình thế giới"],
    correct: "A"
  },
  {
    id: 17,
    question: "Giá trị thặng dư theo Marx là:",
    options: ["Giá trị do công nhân tạo ra", "Giá trị do nhà tư bản chiếm đoạt", "Giá trị hàng hóa", "Giá trị sử dụng"],
    correct: "B"
  },
  {
    id: 18,
    question: "Chủ nghĩa xã hội là giai đoạn:",
    options: ["Thấp của chủ nghĩa cộng sản", "Cao của chủ nghĩa cộng sản", "Trung gian giữa tư bản và cộng sản", "Đầu của chủ nghĩa tư bản"],
    correct: "A"
  },
  {
    id: 19,
    question: "Đặc trưng cơ bản của chủ nghĩa cộng sản theo Marx là:",
    options: ["Không có giai cấp", "Không có nhà nước", "Không có tư hữu", "Cả ba đặc trưng trên"],
    correct: "D"
  },
  {
    id: 20,
    question: "Nguyên lý phân phối trong chủ nghĩa xã hội là:",
    options: ["Theo năng lực", "Theo cống hiến", "Theo nhu cầu", "Theo lao động"],
    correct: "D"
  }
];

const questions = allQuestions.slice(0, 20);

const SEBExamInterface = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 20, seconds: 0 });
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [markedQuestions, setMarkedQuestions] = useState<Set<number>>(new Set());
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [currentTime, setCurrentTime] = useState(new Date());

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (minutes: number, seconds:number) => {
    return `${minutes}m : ${seconds.toString().padStart(2, '0')}s`;
  };

  const getTimeProgress = (minutes: number, seconds: number) => {
    const totalSeconds = minutes * 60 + seconds;
    const maxSeconds = 20 * 60; // 20 phút = 1200 giây
    return (totalSeconds / maxSeconds) * 100;
  };

  const getTimeColor = (minutes: number, seconds: number) => {
    const totalMinutes = minutes + seconds / 60;
    if (totalMinutes > 10) {
      return '#4caf50'; // Xanh lá
    } else if (totalMinutes >= 5) {
      return '#ffc107'; // Vàng
    } else {
      return '#f44336'; // Đỏ
    }
  };

  // Generate question grid (1-20)
  const questionNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleQuestionClick = (questionNum: number) => {
    setCurrentQuestion(questionNum);
    setSelectedAnswer(answers[questionNum] || '');
  };

  const handleMarkQuestion = () => {
    const newMarked = new Set(markedQuestions);
    if (newMarked.has(currentQuestion)) {
      newMarked.delete(currentQuestion);
    } else {
      newMarked.add(currentQuestion);
    }
    setMarkedQuestions(newMarked);
  };

  const handleAnswerChange = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const currentQuestionData = questions[currentQuestion - 1];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Navigation Bar - Above Header */}
      <Box sx={{ 
        bgcolor: '#f5f5f5', 
        px: 2, 
        py: 0.8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" sx={{ p: 0.7 }}>
            <FastRewindIcon sx={{ color: '#666', fontSize: 22 }} />
          </IconButton>
          <IconButton size="small" sx={{ p: 0.7 }}>
            <ChevronLeftIcon sx={{ color: '#666', fontSize: 22 }} />
          </IconButton>
          <IconButton size="small" sx={{ p: 0.7 }}>
            <ChevronRightIcon sx={{ color: '#666', fontSize: 22 }} />
          </IconButton>
          <IconButton size="small" sx={{ p: 0.7 }}>
            <RefreshIcon sx={{ color: '#666', fontSize: 22 }} />
          </IconButton>
        </Box>
        <IconButton size="small" sx={{ p: 0.7 }}>
          <MenuIcon sx={{ color: '#666', fontSize: 22 }} />
        </IconButton>
      </Box>

      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <Toolbar sx={{ minHeight: '56px !important', px: 2 }}>
          {/* Menu Icon */}
          <IconButton size="small" sx={{ p: 0.5, mr: 1 }}>
            <MenuIcon sx={{ color: '#666', fontSize: 22 }} />
          </IconButton>

          {/* Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Box sx={{ width: 152, height:82, mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-01bc-61f5-aa05-8252d95c602e/raw?se=2025-07-26T01%3A36%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=4380f7ef-e7ce-5413-b026-1f8251e52629&skoid=864daabb-d06a-46b3-a747-d35075313a83&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-25T11%3A15%3A24Z&ske=2025-07-26T11%3A15%3A24Z&sks=b&skv=2024-08-04&sig=8k8uGnJiu%2Ba4uKaM4E9ZNDr95mzMaaKHQV3WkPi1PBM%3D" 
                alt="FPT Logo" 
                style={{ 
                  width: '130px', 
                  height: '130px', 
                  objectFit: 'contain',
                  borderRadius: '4px'
                }} 
              />
            </Box>
          </Box>

          {/* Right Side - Time and Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ color: '#666', fontSize: 13 }}>
              {currentTime.toLocaleTimeString('vi-VN')} {currentTime.toLocaleDateString('vi-VN')}
            </Typography>
            <IconButton size="small" sx={{ p: 0.5 }}>
              <SettingsIcon sx={{ color: '#666', fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" sx={{ p: 0.5 }}>
              <NotificationsIcon sx={{ color: '#666', fontSize: 20 }} />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PersonIcon sx={{ color: '#666', fontSize: 18 }} />
              <Typography sx={{ color: '#666', fontSize: 12 }}>
                trinhphse170414@fpt.edu.vn(Exam_FU_HCM)
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Typography sx={{ color: '#666', fontSize: 16, ml: 2, mt: 2 }}>
        Kiểm tra cá nhân - [ClassCode: GD1712] [VRN202] [lamtd8@fe.edu.vn] GD1712
      </Typography>
      {/* Original Body Content */}
      <Box sx={{ display: 'flex', flex: 1, p: 2, boxSizing: 'border-box' }}>
        {/* Left Sidebar */}
        <Paper sx={{ 
          width: 300, 
          p: 2,
          borderRadius: 2,
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 5px 0px rgba(0,0,0,0.06), 0px 1px 10px 0px rgba(0,0,0,0.04)'
        }}>
          {/* Timer */}
          <Box sx={{ mb: 2 }}>
            {/* Progress Bar */}
            <Box sx={{ 
              width: '100%', 
              height: 6,
              bgcolor: '#e0e0e0',
              borderRadius: 3,
              overflow: 'hidden'
            }}>
              <Box sx={{ 
                width: `${getTimeProgress(timeLeft.minutes, timeLeft.seconds)}%`, 
                height: '100%', 
                backgroundColor: getTimeColor(timeLeft.minutes, timeLeft.seconds),
                transition: 'width 0.3s ease, background-color 0.3s ease'
              }} />
            </Box>
            
            {/* Text */}
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ color: '#666', fontSize: 12, mb: 0.5 }}>
                Thời gian còn lại
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 18, color: '#333' }}>
                {formatTime(timeLeft.minutes, timeLeft.seconds)}
              </Typography>
            </Box>
          </Box>

          {/* Question Grid */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 3 }}>
            {questionNumbers.map((num) => {
              const isCurrent = currentQuestion === num;
              const hasAnswer = answers[num];
              const isMarked = markedQuestions.has(num);
              
              let bgColor = '#ffffff';
              let textColor = '#000000';
              
              if (isCurrent) {
                bgColor = '#ffc107';
                textColor = 'black';
              } else if (isMarked) {
                bgColor = '#ffeb3b';
                textColor = 'black';
              } else if (hasAnswer) {
                bgColor = '#2196f3';
                textColor = 'white';
              }
              
              return (
                <Box key={num} sx={{ width: 'calc(20% - 4px)' }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleQuestionClick(num)}
                    sx={{
                      minWidth: 40,
                      height: 32,
                      fontSize: 12,
                      bgcolor: bgColor,
                      color: textColor,
                      border: '1px solid #ddd',
                      boxShadow: 'none',
                      '&:hover': {
                        bgcolor: isCurrent ? '#f9b700' : (isMarked ? '#fdd835' : (hasAnswer ? '#1976d2' : '#f5f5f5')),
                        boxShadow: 'none',
                      }
                    }}
                  >
                    {num}
                  </Button>
                </Box>
              );
            })}
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                sx={{ 
                  lineHeight: 2.5,
                  flex: 1,
                  bgcolor: '#4db6ac', 
                  '&:hover': { bgcolor: '#26a69a' },
                  fontSize: 11,
                  textTransform: 'none'
                }}
                onClick={() => currentQuestion > 1 && setCurrentQuestion(currentQuestion - 1)}
              >
                ◀ Trước
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{ 
                  flex: 1,
                  bgcolor: '#2196f3', 
                  '&:hover': { bgcolor: '#1976d2' },
                  fontSize: 11
                }}
              >
                <RefreshIcon sx={{ color: '#fff', fontSize: 18 }} />Tải lại
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{ 
                  flex: 1,
                  bgcolor: '#4db6ac', 
                  '&:hover': { bgcolor: '#26a69a' },
                  fontSize: 11,
                  textTransform: 'none'
                }}
                onClick={() => currentQuestion < 20 && setCurrentQuestion(currentQuestion + 1)}
              >
                ▶ Tiếp theo
              </Button>
            </Box>
          </Box>

          {/* Submit Buttons */}
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<DescriptionIcon />}
              sx={{ 
                flex: 1,
                color: 'rgba(0, 0, 0, 0.26)',
                borderColor: 'rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  borderColor: 'rgba(0, 0, 0, 0.26)',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Nộp bài
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<SaveIcon />}
              sx={{ 
                flex: 1,
                color: 'rgba(0, 0, 0, 0.26)',
                borderColor: 'rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  borderColor: 'rgba(0, 0, 0, 0.26)',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Lưu bài làm
            </Button>
          </Box>

          {/* Notes Button */}
          <Button
            variant="outlined"
            size="small"
            fullWidth
            startIcon={<InfoIcon />}
            sx={{ 
              color: 'rgba(0, 0, 0, 0.26)',
              borderColor: 'rgba(0, 0, 0, 0.12)',
              '&:hover': {
                borderColor: 'rgba(0, 0, 0, 0.26)',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            Lưu ý khi làm bài
          </Button>
        </Paper>

        {/* Main Content Area */}
        <Box sx={{ flex: 1, ml: 2 }}>
          <Paper sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            {/* Question Header */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 3
            }}>
              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                CÂU HỎI {currentQuestion} (SINGLECHOICE)
              </Typography>
              <Chip 
                icon={<StarIcon sx={{ fontSize: 16 }} />}
                label="Đánh dấu"
                onClick={handleMarkQuestion}
                variant={markedQuestions.has(currentQuestion) ? "filled" : "outlined"}
                sx={{ 
                  cursor: 'pointer',
                  color: '#fff59d',
                  bgcolor: markedQuestions.has(currentQuestion) ? 'rgba(255, 245, 157, 0.15)' : 'transparent',
                  borderColor: '#fff59d',
                  '& .MuiChip-icon': {
                    color: '#fff59d'
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255, 245, 157, 0.2)',
                    borderColor: '#fff59d'
                  }
                }}
              />
            </Box>

            {/* Question Content */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: 16 }}>
                Câu hỏi: <Box component="span" sx={{ fontWeight: 'bold' }}>{`"${currentQuestionData.question}"`}</Box>
              </Typography>

              {/* Answer Options */}
              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedAnswer}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                >
                  {currentQuestionData.options.map((option, index) => (
                    <FormControlLabel 
                      key={index}
                      value={String.fromCharCode(65 + index)} // A, B, C, D
                      control={<Radio />} 
                      label={
                        <Typography sx={{ ml: 2 }}>
                          {option}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ 
        bgcolor: '#f5f5f5', 
        color: '#666', 
        px: 3, 
        py: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* SEB Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Box >
            <img src="https://images.sftcdn.net/images/t_app-icon-m/p/60ea015a-5e31-4c25-8599-5dcebc2fcab2/663334460/safe-exam-browser-icon.png" alt="SEB Logo" style={{ width: 24, height: 24 }} />
          </Box>
        </Box>

        {/* Right Side Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Battery Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BatteryIcon sx={{ 
              fontSize: 22, 
              color: '#4caf50',
              transform: 'rotate(90deg)'
            }} />
          </Box>

          {/* Wifi Icon */}
          <WifiIcon sx={{ fontSize: 20, color: '#666' }} />

          {/* Volume Icon */}
          <VolumeUpIcon sx={{ fontSize: 20, color: '#666' }} />

          {/* Language */}
          <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
            ENG
          </Typography>

          {/* Time and Date */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontSize: 12, lineHeight: 1 }}>
              {currentTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
            </Typography>
            <Typography sx={{ fontSize: 11, lineHeight: 1, color: '#999' }}>
              {currentTime.toLocaleDateString('vi-VN')}
            </Typography>
          </Box>

          {/* Power Icon */}
          <IconButton size="small" sx={{ color: '#666', p: 0.5, ml: 1 }}>
            <PowerIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SEBExamInterface;
