import { Box, Button } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
}

export const GoogleLoginButton = function ({ onClick }: Props) {
  return (
    <Box>
      <Button
        size="lg"
        width="full"
        mx="6"
        maxW="md"
        borderRadius="full"
        bgColor="#4285f4"
        color="white"
        colorScheme="blue"
        leftIcon={<img src="/google_logo.svg" alt="google 로고" style={{ backgroundColor: 'white', padding: '8px' }} />}
        onClick={onClick}
      >
        구글 계정으로 시작하기
      </Button>
    </Box>
  );
};
