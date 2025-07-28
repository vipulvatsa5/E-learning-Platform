import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const Payment = () => {
  const [amount, setAmount] = useState('');
  const toast = useToast();

  const handlePayment = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast({
        title: 'Invalid Amount',
        description: 'Please enter a valid payment amount.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: 'Payment Initiated',
      description: `Processing ₹${amount} payment...`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Your actual payment logic goes here
  };

  return (
    <Flex justify="center" align="center" minH="100vh" bg="gray.50">
      <Box
        p={8}
        rounded="2xl"
        boxShadow="lg"
        bg="white"
        w="full"
        maxW="md"
        animation={`${pulse} 2s infinite`}
      >
        <Heading mb={6} textAlign="center" size="lg" color="teal.500">
          Make a Payment
        </Heading>

        <Text mb={2}>Enter Amount (in ₹):</Text>
        <Input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          mb={6}
          focusBorderColor="teal.400"
        />

        <Button colorScheme="teal" w="full" onClick={handlePayment}>
          Pay Now
        </Button>
      </Box>
    </Flex>
  );
};

export default Payment;
