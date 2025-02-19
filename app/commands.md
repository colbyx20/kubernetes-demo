docker run -p 3000:3000 colbyx20/k8-demo:1.0.5


kubectl run load-generator --image=busybox -- sh

while true; do wget -q -O- http://hello-k8s-service:3000; done
while true; do wget -q -O- http://hello-k8s-service:3000; sleep 10; done

