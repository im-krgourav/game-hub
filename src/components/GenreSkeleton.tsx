import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const GenreSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" height={10} marginY="1px">
      <Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GenreSkeleton;
